import {
  generateWAMessageFromContent,
  generateWAMessageContent
} from '../index.js'

export async function sendButtonImage(
  conn,
  jid,
  image,
  caption = '',
  footer = '',
  buttons = [],
  quoted = null
) {
  const media = await generateWAMessageContent(
    {
      image: { url: image }
    },
    {
      upload: conn.waUploadToServer
    }
  )

  const msg = generateWAMessageFromContent(
    jid,
    {
      interactiveMessage: {
        header: {
          hasMediaAttachment: true,
          imageMessage: media.imageMessage
        },
        body: {
          text: caption || ' '
        },
        footer: {
          text: footer || ' '
        },
        nativeFlowMessage: {
          buttons: buttons.map(b => ({
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              id: b.id,
              display_text: b.text
            })
          }))
        }
      }
    },
    { quoted }
  )

  await conn.relayMessage(jid, msg.message, {
    messageId: msg.key.id
  })
}