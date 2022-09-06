const path = require('path');
const fs = require('fs');

describe('Verification du contenu dans le dossier `content/edu`', function () {
  const contentPath = path.join(__dirname, '../content/edu');
  const dirContent = fs.readdirSync(contentPath);

  dirContent.forEach((file) => {
    let tutoFileContent = {};

    beforeEach(function () {
      try {
        tutoFileContent = require(path.join(contentPath, file));
      } catch {
        throw new Error(`Le fichier ${file} ne respecte pas le format JSON`);
      }
    });

    describe(`Le fichier ${file}`, function () {
      it('doit avoir un nom alpha numérique et une extension en ".json"', () => {
        try {
          expect(file).toMatch(/^[0-9a-z-_]+\.json$/);
        } catch {
          throw new Error(
            `Le nom du fichier ${file} doit être en minuscule, ne pas contenir d'espace, d'accents ou de caractères spéciaux (sauf "-" et "_")`
          );
        }
      });

      it('doit avoir un champ `title`', function () {
        try {
          expect(tutoFileContent.title).toBeDefined();
          expect(typeof tutoFileContent.title).toBe('string');
        } catch {
          throw new Error('Le champ "title" est obligatoire.');
        }
      });

      it('doit avoir un champ `description`', function () {
        try {
          expect(tutoFileContent.description).toBeDefined();
          expect(typeof tutoFileContent.description).toBe('string');
        } catch {
          throw new Error('Le champ "description" est obligatoire.');
        }
      });

      it('doit avoir un champ `videoEmbedSrc`', function () {
        try {
          expect(tutoFileContent.videoEmbedSrc).toBeDefined();
        } catch {
          throw new Error('Le champ "videoEmbedSrc" est obligatoire.');
        }
      });

      it('ne doit pas contenir des champs inconnus', function () {
        try {
          expect([
            'title',
            'description',
            'videoEmbedSrc',
            'videoDLHref',
            'fichePdfHref',
            'transcriptPdfHref',
          ]).toEqual(expect.arrayContaining(Object.keys(tutoFileContent)));
        } catch {
          throw new Error(
            `Des champs inconnus sont présents. Champs attendus : "title", "description", "videoEmbedSrc", "videoDLHref", "fichePdfHref", "transcriptPdfHref".`
          );
        }
      });

      it('le champ `videoEmbedSrc` doit avoir un format précis', function () {
        try {
          expect(tutoFileContent.videoEmbedSrc).toMatch(
            /^https:\/\/tube-numerique-educatif\.apps\.education\.fr\/videos\/embed\/(\w|-)+$/
          );
        } catch {
          throw new Error(
            `Le format du lien "videoEmbedSrc" est invalide (format attendu : "https://tube-numerique-educatif.apps.education.fr/videos/embed/{ID_VIDEO}", valeur reçue : "${
              tutoFileContent.videoEmbedSrc ?? ''
            }")`
          );
        }
      });

      it('le champ `videoDLHref` doit avoir un format précis (si présent)', function () {
        if (!tutoFileContent.videoDLHref) return;
        try {
          expect(tutoFileContent.videoDLHref).toMatch(
            /^https:\/\/tube-numerique-educatif\.apps\.education\.fr\/download\/videos\/(\w|-)+\.mp4$/
          );
        } catch {
          throw new Error(
            `Le format du lien "videoDLHref" est invalide (format attendu : "https://tube-numerique-educatif.apps.education.fr/download/videos/{ID_VIDEO}.mp4", valeur reçue : "${tutoFileContent.videoDLHref}")`
          );
        }
      });

      it('le champ `fichePdfHref` doit avoir un format précis (si présent)', function () {
        if (!tutoFileContent.fichePdfHref) return;
        try {
          expect(tutoFileContent.fichePdfHref).toMatch(
            /^https:\/\/dl\.pix\.fr\/tutoFileContents\/(\w|-)+\.pdf$/
          );
        } catch {
          throw new Error(
            `Le format du lien "fichePdfHref" est invalide (format attendu : "https://dl.pix.fr/tutoFileContents/{ID_TUTOFileContent}.pdf", valeur reçue : "${tutoFileContent.fichePdfHref}")`
          );
        }
      });

      it('le champ `transcriptPdfHref` doit avoir un format précis (si présent)', function () {
        if (!tutoFileContent.transcriptPdfHref) return;
        try {
          expect(tutoFileContent.transcriptPdfHref).toMatch(
            /^https:\/\/dl\.pix\.fr\/tutoFileContents\/(\w|-)+\.pdf$/
          );
        } catch {
          throw new Error(
            `Le format du lien "transcriptPdfHref" est invalide (format attendu : "https://dl.pix.fr/tutoFileContents/{ID_TUTOFileContent}.pdf", valeur reçue : "${tutoFileContent.fichePdfHref}")`
          );
        }
      });
    });
  });
});
