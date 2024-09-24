import fs from 'node:fs'
import path from 'node:path'
import { beforeEach, describe, expect, it } from 'vitest'
import parseMarkdownMetadata from '../../services/parse-markdown'

describe('verification du contenu dans le dossier `content/mednum`', () => {
  const contentPath = path.join(__dirname, '../../content/mednum')
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

    describe(`le fichier `, () => {
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

      it('doit avoir un champ `videoEmbedSrc` si fileType est VIDEO', () => {
        try {
          if (tutoFileMetadata.fileType === 'VIDEO')
            expect(tutoFileMetadata.videoEmbedSrc).toBeDefined()
          else expect(tutoFileMetadata.videoEmbedSrc).not.toBeDefined()
        }
        catch {
          throw new Error('Le champ "videoEmbedSrc" est obligatoire.')
        }
      })

      it('doit avoir un champ `captionFilePath` si fileType est VIDEO', () => {
        try {
          if (tutoFileMetadata.fileType === 'VIDEO')
            expect(tutoFileMetadata.captionFilePath).toBeDefined()
          else expect(tutoFileMetadata.captionFilePath).not.toBeDefined()
        }
        catch {
          throw new Error('Le champ "captionFilePath" est obligatoire.')
        }
      })

      it('ne doit pas contenir des champs inconnus', () => {
        const acceptedFieldsVideo = [
          'title',
          'description',
          'fileType',
          'videoEmbedSrc',
          'captionFilePath',
        ]

        const acceptedFieldsPdf = [
          'title',
          'description',
          'fileType',
          'pdfFilePath',
        ]
        try {
          if (tutoFileMetadata.fileType === 'VIDEO') {
            expect(acceptedFieldsVideo).toEqual(
              expect.arrayContaining(Object.keys(tutoFileMetadata)),
            )
          }
          else {
            expect(acceptedFieldsPdf).toEqual(
              expect.arrayContaining(Object.keys(tutoFileMetadata)),
            )
          }
        }
        catch {
          throw new Error(
            `Des champs inconnus sont présents. Champs attendus : ${acceptedFieldsVideo}.`,
          )
        }
      })

      it('le champ `videoEmbedSrc` doit avoir un format précis pour les fileType VIDEO', () => {
        try {
          if (tutoFileMetadata.fileType === 'VIDEO') {
            expect(tutoFileMetadata.videoEmbedSrc).toMatch(
              /^https:\/\/videos\.pix\.fr\/tutos\/mednum\/(\w|-)+\.mp4$/,
            )
          }
          else { expect(tutoFileMetadata.videoEmbedSrc).not.toBeDefined() }
        }
        catch {
          throw new Error(
            `Le format du lien "videoEmbedSrc" est invalide (format attendu : "https://videos.pix.fr/tutos/mednum/{ID_VIDEO}.mp4", valeur reçue : "${
              tutoFileMetadata.videoEmbedSrc ?? ''
            }")`,
          )
        }
      })

      it('le champ `captionFilePath` doit avoir un format précis pour les fileType VIDEO', () => {
        try {
          if (tutoFileMetadata.fileType === 'VIDEO') {
            expect(tutoFileMetadata.captionFilePath).toMatch(
              /^\/captions\/mednum\/(\w|-)+\.vtt$/,
            )
          }
          else { expect(tutoFileMetadata.captionFilePath).not.toBeDefined() }
        }
        catch {
          throw new Error(
            `Le format du lien "captionFilePath" est invalide (format attendu : "/captions/mednum/{ID_VIDEO}.vtt", valeur reçue : "${
              tutoFileMetadata.captionFilePath ?? ''
            }")`,
          )
        }
      })

      it('doit avoir un champ `pdfFilePath` si fileType est PDF', () => {
        try {
          if (tutoFileMetadata.fileType === 'PDF')
            expect(tutoFileMetadata.pdfFilePath).toBeDefined()

          else expect(tutoFileMetadata.pdfFilePath).not.toBeDefined()
        }
        catch {
          throw new Error('Le champ "pdfFilePath" est obligatoire.')
        }
      })

      it('le champ `pdfFilePath` doit avoir un format précis si filetype est PDF', () => {
        try {
          if (tutoFileMetadata.fileType === 'PDF') {
            expect(tutoFileMetadata.pdfFilePath).toMatch(
              /^\/pdf\/mednum\/(\w|-)+\.pdf$/,
            )
          }
          else { expect(tutoFileMetadata.pdfFilePath).not.toBeDefined() }
        }
        catch {
          throw new Error(
            `Le format du lien "pdfFilePath" est invalide (format attendu : "/pdf/mednum/{PDF_FILE_NAME}.pdf", valeur reçue : "${
              tutoFileMetadata.pdfFilePath ?? ''
            }")`,
          )
        }
      })
    })
  })
})
