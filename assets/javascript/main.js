function text_msg() {
  const text = inputTexto.value.toLowerCase();

  var encode_message = text.replace(/enter/gim, "e");
  var encode_message = encode_message.replace(/enter/gim, "e");
  var encode_message = encode_message.replace(/ober/gim, "o");
  var encode_message = encode_message.replace(/imes/gim, "i");
  var encode_message = encode_message.replace(/ai/gim, "a");
  var encode_message = encode_message.replace(/ufat/gim, "u");

  test(encode_message);
}

function result_msg() {
  const text = inputTexto.value.toLowerCase();
  var decode_message = text.replace(/enter/gim, "e");
  var decode_message = decode_message.replace(/ober/gim, "o");
  var decode_message = decode_message.replace(/imes/gim, "i");
  var decode_message = decode_message.replace(/ai/gim, "a");
  var decode_message = decode_message.replace(/ufat/gim, "u");

  test(decode_message);
}
