import { generateWAMessageFromContent, proto, prepareMessageMedia } from '../index.js';

/**
 * sendButtonImage
 * Permite mandar botones con imagen
 */
export async function sendButtonImage(conn, jid, image, caption = '', footer = '', buttons = [], quoted = null) {
    const media = await prepareMessageMedia(conn, { image: { url: image } }, { upload: conn.waUploadToServer });
    const buttonMessage = {
        imageMessage: media.imageMessage,
        caption,
        footer,
        buttons: buttons.map(b => ({
            buttonId: b.id,
            buttonText: { displayText: b.text },
            type: 1
        })),
        headerType: 4
    };
    const msg = generateWAMessageFromContent(jid, { buttonsMessage: buttonMessage }, { quoted });
    return conn.relayMessage(jid, msg.message, { messageId: msg.key.id });
}

/**
 * sendButtonVideo
 * Permite mandar botones con video
 */
export async function sendButtonVideo(conn, jid, video, caption = '', footer = '', buttons = [], quoted = null) {
    const media = await prepareMessageMedia(conn, { video: { url: video } }, { upload: conn.waUploadToServer });
    const buttonMessage = {
        videoMessage: media.videoMessage,
        caption,
        footer,
        buttons: buttons.map(b => ({
            buttonId: b.id,
            buttonText: { displayText: b.text },
            type: 1
        })),
        headerType: 5
    };
    const msg = generateWAMessageFromContent(jid, { buttonsMessage: buttonMessage }, { quoted });
    return conn.relayMessage(jid, msg.message, { messageId: msg.key.id });
}