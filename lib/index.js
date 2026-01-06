import chalk from "chalk"
import makeWASocket from './Socket/index.js'
import { sendButtonImage } from './interactive/buttons.js'

export * from '../WAProto/index.js'
export * from './Utils/index.js'
export * from './Types/index.js'
export * from './Defaults/index.js'
export * from './WABinary/index.js'
export * from './WAM/index.js'
export * from './WAUSync/index.js'

function makeSocketWithButtons(opts) {
  const conn = makeWASocket(opts)

  conn.sendButtonImage = function (
    jid,
    image,
    caption = '',
    footer = '',
    buttons = [],
    quoted = null
  ) {
    return sendButtonImage(
      conn,
      jid,
      image,
      caption,
      footer,
      buttons,
      quoted
    )
  }

  return conn
}

export { makeSocketWithButtons as makeWASocket }
export default makeSocketWithButtons