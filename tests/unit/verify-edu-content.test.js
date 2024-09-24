import fs from 'node:fs'
import path from 'node:path'
import { beforeEach, describe, expect, it } from 'vitest'
import getAreas from '../../services/get-areas'
import parseMarkdownMetadata from '../../services/parse-markdown'

describe('verification du contenu dans le dossier `content/edu`', () => {
  const contentPath = path.join(__dirname, '../../content/edu')
  const dirContent = fs.readdirSync(contentPath)

  dirContent.forEach((file) => {
    let tutoFileMetadata = {}

    beforeEach(() => {
      try {
        const markdown = fs.readFileSync(path.join(contentPath, file), 'utf8')
        tutoFileMetadata = parseMarkdownMetadata(markdown)
      }
      catch {
        throw new Error(`Le fichier ${file} n'a aucune metadonnée`)
      }
    })

    describe(`le fichier ${file}`, () => {
      it('doit avoir un nom alpha numérique et une extension en ".md"', () => {
        try {
          expect(file).toMatch(/^[0-9a-z-_]+\.md$/)
        }
        catch {
          throw new Error(
            `Le nom du fichier ${file} doit être en minuscule, finir par l'extension '.md', ne pas contenir d'espace, d'accents ou de caractères spéciaux (sauf "-" et "_")`,
          )
        }
      })

      it('doit avoir un champ `area` existant', () => {
        try {
          expect(tutoFileMetadata.area).toBeDefined()
          expect(typeof tutoFileMetadata.area).toBe('string')
        }
        catch {
          throw new Error('Le champ "area" est obligatoire.')
        }
        try {
          expect(getAreas()).toHaveProperty(tutoFileMetadata.area)
        }
        catch {
          throw new Error(
            `Cette valeur d'"area" n'est pas permise. Valeurs permises : ${Object.keys(
              getAreas(),
            )}`,
          )
        }
      })

      it('doit avoir un champ `title`', () => {
        try {
          expect(tutoFileMetadata.title).toBeDefined()
          expect(typeof tutoFileMetadata.title).toBe('string')
        }
        catch {
          throw new Error('Le champ "title" est obligatoire.')
        }
      })

      it('doit avoir un champ `description`', () => {
        try {
          expect(tutoFileMetadata.description).toBeDefined()
          expect(typeof tutoFileMetadata.description).toBe('string')
        }
        catch {
          throw new Error('Le champ "description" est obligatoire.')
        }
      })

      it('doit avoir un champ `videoEmbedSrc`', () => {
        try {
          expect(tutoFileMetadata.videoEmbedSrc).toBeDefined()
        }
        catch {
          throw new Error('Le champ "videoEmbedSrc" est obligatoire.')
        }
      })

      it('ne doit pas contenir des champs inconnus', () => {
        const acceptedFields = [
          'area',
          'title',
          'description',
          'videoEmbedSrc',
          'videoDownloadHref',

        ]
        try {
          expect(acceptedFields).toEqual(
            expect.arrayContaining(Object.keys(tutoFileMetadata)),
          )
        }
        catch {
          throw new Error(
            `Des champs inconnus sont présents. Champs attendus : ${acceptedFields}.`,
          )
        }
      })

      it('le champ `videoEmbedSrc` doit avoir un format précis', () => {
        try {
          expect(tutoFileMetadata.videoEmbedSrc).toMatch(
            /^https:\/\/tube\.reseau-canope\.fr\/videos\/embed\/(\w|-)+$/,
          )
        }
        catch {
          throw new Error(
            `Le format du lien "videoEmbedSrc" est invalide (format attendu : "https://tube.reseau-canope.fr/videos/embed/{ID_VIDEO}", valeur reçue : "${
              tutoFileMetadata.videoEmbedSrc ?? ''
            }")`,
          )
        }
      })

      it('le champ `videoDownloadHref` doit avoir un format précis (si présent)', () => {
        if (!tutoFileMetadata.videoDownloadHref)
          return
        try {
          expect(tutoFileMetadata.videoDownloadHref).toMatch(
            /^https:\/\/tube\.reseau-canope\.fr\/download\/(streaming-playlists\/hls\/)?videos\/(\w|-)+\.mp4$/,
          )
        }
        catch {
          throw new Error(
            `Le format du lien "videoDownloadHref" est invalide (format attendu : "https://tube.reseau-canope.fr/download/streaming-playlists/hls/videos/{ID_VIDEO}.mp4" ou "https://tube.reseau-canope.fr/download/videos/{ID_VIDEO}.mp4", valeur reçue : "${tutoFileMetadata.videoDownloadHref}")`,
          )
        }
      })
    })
  })
})
