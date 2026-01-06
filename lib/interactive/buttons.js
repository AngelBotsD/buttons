/**
 * Botones con imagen
 * (único formato que WhatsApp sigue mostrando)
 */
export async function sendButtonImage(
    conn,
    jid,
    image,
    caption = '',
    footer = '',
    buttons = [],
    quoted = null
) {
    return conn.sendMessage(
        jid,
        {
            image: { url: image },
            caption,
            footer,
            buttons,
            headerType: 4
        },
        { quoted }
    )
}

/**
 * Botones con video
 */
export async function sendButtonVideo(
    conn,
    jid,
    video,
    caption = '',
    footer = '',
    buttons = [],
    quoted = null
) {
    return conn.sendMessage(
        jid,
        {
            video: { url: video },
            caption,
            footer,
            buttons,
            headerType: 5
        },
        { quoted }
    )
}