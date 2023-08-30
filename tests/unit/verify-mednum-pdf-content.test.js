import path from 'node:path'
import fs from 'node:fs'
import { beforeEach, describe, expect, it } from 'vitest'
import parseMarkdownMetadata from '../../services/parse-markdown'

describe('Verification du contenu dans le dossier `content/mednum`', () => {
  const contentPath = path.join(__dirname, '../../content/mednum/pdf')
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

    describe(`Le fichier ${file}`, () => {
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

      it('doit avoir un champ `sourcePdf`', () => {
        try {
          expect(tutoFileMetadata.sourcePdf).toBeDefined()
        }
        catch {
          throw new Error('Le champ "sourcePdf" est obligatoire.')
        }
      })

      it('ne doit pas contenir des champs inconnus', () => {
        const acceptedFields = [
          'title',
          'description',
          'sourcePdf',
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

      it('le champ `sourcePdf` doit avoir un format précis', () => {
        try {
          expect(tutoFileMetadata.sourcePdf).toMatch(
            /^\/pdf\/mednum\/(\w|-)+\.pdf$/,
          )
        }
        catch {
          throw new Error(
          `Le format du lien "sourcePdf" est invalide (format attendu : "/pdf/mednum/{PDF_FILE_NAME}.pdf", valeur reçue : "${
            tutoFileMetadata.sourcePdf ?? ''
          }")`,
          )
        }
      })
    })
  })
})
