$(function(){
  function buildHTML(message) {
    if ( message.image ) {
      var html =
        `<div class="chat__message-list--box">
          <div class="chat__message-list--box--name">
            ${message.user_name}
          </div>
          <div class="chat__message-list--box--date">
            ${message.created_at}
          </div>
          <div class="chat__message-list--box--text">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="chat__message-list--box">
          <div class="chat__message-list--box--name">
            ${message.user_name}
          </div>
          <div class="chat__message-list--box--date">
            ${message.created_at}
          </div>
          <div class="chat__message-list--box--text">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat__message-list').append(html);
      $('.chat__message-list').animate({ scrollTop: $('.chat__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.form__submit').prop('disabled', false);
    });
  });
});
