import path from 'path';
import fs from 'fs';
import { describe, beforeEach, it, expect } from 'vitest';
import getAreas from '../../services/get-areas';
import parseMarkdownMetadata from '../../services/parse-markdown';

describe('Verification du contenu dans le dossier `content/edu`', function () {
  const contentPath = path.join(__dirname, '../../content/edu');
  const dirContent = fs.readdirSync(contentPath);

  dirContent.forEach((file) => {
    let tutoFileMetadata = {};

    beforeEach(function () {
      try {
        const markdown = fs.readFileSync(path.join(contentPath, file), 'utf8');
        tutoFileMetadata = parseMarkdownMetadata(markdown);
      } catch {
        throw new Error(`Le fichier ${file} n'a aucune metadonnée`);
      }
    });

    describe(`Le fichier ${file}`, function () {
      it('doit avoir un nom alpha numérique et une extension en ".md"', () => {
        try {
          expect(file).toMatch(/^[0-9a-z-_]+\.md$/);
        } catch {
          throw new Error(
            `Le nom du fichier ${file} doit être en minuscule, finir par l'extension '.md', ne pas contenir d'espace, d'accents ou de caractères spéciaux (sauf "-" et "_")`
          );
        }
      });

      it('doit avoir un champ `area` existant', function () {
        try {
          expect(tutoFileMetadata.area).toBeDefined();
          expect(typeof tutoFileMetadata.area).toBe('string');
        } catch {
          throw new Error('Le champ "area" est obligatoire.');
        }
        try {
          expect(getAreas()).toHaveProperty(tutoFileMetadata.area);
        } catch {
          throw new Error(
            `Cette valeur d'"area" n'est pas permise. Valeurs permises : ${Object.keys(
              getAreas()
            )}`
          );
        }
      });

      it('doit avoir un champ `title`', function () {
        try {
          expect(tutoFileMetadata.title).toBeDefined();
          expect(typeof tutoFileMetadata.title).toBe('string');
        } catch {
          throw new Error('Le champ "title" est obligatoire.');
        }
      });

      it('doit avoir un champ `description`', function () {
        try {
          expect(tutoFileMetadata.description).toBeDefined();
          expect(typeof tutoFileMetadata.description).toBe('string');
        } catch {
          throw new Error('Le champ "description" est obligatoire.');
        }
      });

      it('doit avoir un champ `videoEmbedSrc`', function () {
        try {
          expect(tutoFileMetadata.videoEmbedSrc).toBeDefined();
        } catch {
          throw new Error('Le champ "videoEmbedSrc" est obligatoire.');
        }
      });

      it('ne doit pas contenir des champs inconnus', function () {
        const acceptedFields = [
          'area',
          'title',
          'description',
          'videoEmbedSrc',
          'videoDLHref',

        ];
        try {
          expect(acceptedFields).toEqual(
            expect.arrayContaining(Object.keys(tutoFileMetadata))
          );
        } catch {
          throw new Error(
            `Des champs inconnus sont présents. Champs attendus : ${acceptedFields}.`
          );
        }
      });

      it('le champ `videoEmbedSrc` doit avoir un format précis', function () {
        try {
          expect(tutoFileMetadata.videoEmbedSrc).toMatch(
            /^https:\/\/tube\.reseau-canope\.fr\/videos\/embed\/(\w|-)+$/
          );
        } catch {
          throw new Error(
            `Le format du lien "videoEmbedSrc" est invalide (format attendu : "https://tube.reseau-canope.fr/videos/embed/{ID_VIDEO}", valeur reçue : "${
              tutoFileMetadata.videoEmbedSrc ?? ''
            }")`
          );
        }
      });

      it('le champ `videoDLHref` doit avoir un format précis (si présent)', function () {
        if (!tutoFileMetadata.videoDLHref) return;
        try {
          expect(tutoFileMetadata.videoDLHref).toMatch(
            /^https:\/\/tube\.reseau-canope\.fr\/download\/streaming-playlists\/hls\/videos\/(\w|-)+\.mp4$/
          );
        } catch {
          throw new Error(
            `Le format du lien "videoDLHref" est invalide (format attendu : "https://tube.reseau-canope.fr/download/streaming-playlists/hls/videos/{ID_VIDEO}.mp4", valeur reçue : "${tutoFileMetadata.videoDLHref}")`
          );
        }
      });
    });
  });
});
