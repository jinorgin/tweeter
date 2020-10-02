/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//const $tweet = $(`<article class="tweet">Hello world</article>`);

const data = 
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    }


const submitTweet = function (event) {
  event.preventDefault();
  var $form = $(this);
  var $input = $form.find('textarea');
  var formData = $form.serialize();

  //submit ajax request
  $.ajax({
    url: "/tweets",
    type: "post",
    data: formData
  })
    .done(function (data) {
      loadTweets();
    });
  return true;
};



function loadTweets() {
  // not expecting use of promises or for them to understand them at least.
  $.ajax('/tweets', { method: 'GET', dataType: "json" })
    .then(function (result) {
      renderTweets(result);
    });
}

  
const renderTweet = function(tweets){
  var tweetsContainer = $('#post-tweet');

  // Empty the container first
  tweetsContainer.html('');

  tweets.forEach((tweet) => {
    const tweetElement = createTweetElement(tweet);
    tweetsContainer.prepend(tweetElement);
  });
}

//This one is backup
const $tweet = (`<section class="post-tweet">
<article class="tweet">
<h4>${data.user.name}</h4>
<div>
  <textarea name="text" id="tweet-text" disabled>${data.content.text}</textarea>
</div>
  <div>
    <div class="right">
    <output name="counter" class="counter" for="tweet-text"></output>
  </div>
</div>
</article>
</section>`)


//create the tweet
const createTweetElement = function(tweet) {
  const $tweet2 = $("<article>").addClass("tweet");
  const $new =`<h4>${tweet.user.name}</h4>
    <div>
      <textarea name="text" id="tweet-text" disabled>${tweet.content.text}</textarea>
    </div>
      <div>
        <div class="right">
        <output name="counter" class="counter" for="tweet-text"></output>
      </div>`;

    const tweetElement = $tweet2.append($new);
    return tweetElement;
  }

  $(document).ready(function(){
    console.log("testing to see if it's work.")
    //let $res = renderTweet(data);
    $("form").on("submit", submitTweet);


  //loadTweets();
  

    //Backup for click function
    $("#tweet").click(function(){      
      console.log($tweet);
        $('.tweet').append($tweet); 
    })

    //$("#tweet").submit(submitTweet)

  })



