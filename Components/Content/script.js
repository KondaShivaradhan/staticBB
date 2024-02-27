console.log("its me");
const myContentElement = document.querySelector("my-content");

const contentDiv = myContentElement.shadowRoot.querySelector("#ContentHere");
// Check if the element is found
if (contentDiv) {
  // Element found, perform actions
  console.log("my-content is fully defined");
  const data = [
    [
      [
        "Twitch",
        "https://www.gifcen.com/wp-content/uploads/2022/07/twitch-gif-3.gif",
        ["https://giffiles.alphacoders.com/137/137529.gif", ""],
        "I stream live coding sessions while developing a variety of applications, from automation scripts to web and mobile apps.   Join me as I code and share insights into software development",
        "https://www.twitch.tv/blazingbane",
      ],
      [
        "Youtube",
        "https://bizglide.in/images/blog/youtube-seo.gif",
        ["", "/Public/lottie/Youtube.json"],
        "On this platform you can fine a variety of content like   personal vlogs, Gaming, and some offline content.   I also play games and live stream them.  Join me for some gaming fun",
        "https://www.youtube.com/channel/UCPFM_Ug62Ei3CUfvquG4KOg",
      ],
      [
        "Blogs",
        "https://media.giphy.com/media/prsVOti94aE2k/giphy.gif",
        ["", "/public/lottie/blog.json"],
        `I believe in sharing knowledge and experiences with other for greater good. I started my known Blogging journey where I share guides, insights and a few findings of various topics.
I share things which are useful for others in a context of Tech, Health, Documents, Applications etc.`,
        "https://blogs.blazingbane.com",
      ],
      [
        "Rimmind",
        "https://scitechdaily.com/images/Brain-Patterns-Illustration.gif",
        ["", "/public/lottie/brain.json"],
        `I forget things which I wanted to remember, to solve this I have build my own custom application compatible with Web and Android where 
        anyone can store their thoughts, assign tags while having it all encrypted for security.`,
        "https://rimmind.blazingbane.com",
      ],
    ],
    [
      [
        "Memes",
        "https://media.tenor.com/cfK6NIxpR4MAAAAM/angry-macha.gif",
        ["", "/public/lottie/insta.json"],
        `Its a joy to see people happy and memes give people a moment to laugh about for a while. 
        I try to get this joy of making peoples a happy momement with a instagram page name @BaleBanjara`,
        "https://www.instagram.com/_balebanjara_/",
      ],
      [
        "Github",
        "https://user-images.githubusercontent.com/81328619/213875785-400ae517-156b-4aca-a787-bac75d84c393.gif",
        [
          "https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif",
          "",
        ],
        `I have a thing for building useful things with skill set I have in coding projest.
         visit my repo who knows you might find any thing useful for you`,
        "https://github.com/KondaShivaradhan",
      ],
      [
        "Guru Shots",
        "https://66.media.tumblr.com/0f10ea31f3ee636e6d4dce8e2cb396df/tumblr_mkpqnn9rtV1s9j8ldo1_500.gif",
        ["", "/public/lottie/camera.json"],
        `I known a Canon M50ii and cherish a passion for photography with that im currently a veteran in <strong> <i>GURU SHORTS</i></strong>😎. 
        I have some stunning shots that I'm proud of Link below for my profile`,
        "https://rimmind.blazingbane.com",
      ],
      [
        "Who am I?",
        "https://media.giphy.com/media/l41YvioBMoiQUwKbu/giphy.gif",
        ["", "/public/lottie/person.json"],
        `A fellow human on this planet names as <strong><i>Shivaradhan Konda</i></strong> in my late 20's born in India currently in USA. I feel strange talking about myself for some reason.
        `,
        "https://kondashivaradhan.github.io/",
      ],
    ],
  ];
  //Heading,Backimg, [IconImg,IconLottie],Text,link
  data.forEach((r) => {
    var thisrow = document.createElement("div");
    thisrow.className = "project-w w-dyn-list";
    var roleDiv = document.createElement("div");
    roleDiv.className = "project-list w-dyn-items";
    r.forEach((item) => {
      var listItem = document.createElement("div");
      listItem.className = "project-item w-dyn-item";
      listItem.innerHTML = `
      
        <div
                 
                    class="project-item__media-w w-inline-block"
                  >
                    <div
                      style="height: 100%; width: 100%"
                      class="project-item__media w-embed"
                    >
                     <div
    id="check"
    class="z-20 flex gap-4 flex-col items-center justify-center h-full w-full hover:bg-transparent duration-1000 transition-all"
>
       ${
         item[2][0].length > 0
           ? `
        <img
            loading="lazy"
            src="${item[2][0]}"
            class="Clogo"
            alt=""
        />
    `
           : `
        <lottie-player
            class="Clogo"
            src="${item[2][1]}"
            style="transform:scale(1.2)"
            background="transparent"
            speed="1"
            loop
            autoplay
        ></lottie-player> 
    `
       }
    <div class="ceck">
    <h2 class="text-center text-2xl ">${item[0]}</h2>
    <style>
    #ContentText{
      max-width:450px;
    }
    @media only screen and (max-device-width: 768px) {
   
#ContentText{
      max-width:350px;
    }
}
    </style>
        <h4 id="ContentText" class="text-center text-base">${item[3]}</h4>
        <br>
         <div>
        <a  target="_blank"
        href="${item[4]}" ><button
        style="
  background: #5E5DF0;
  border-radius: 999px;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
padding-top: 7px;
padding-right: 15px;
padding-bottom:7px;
padding-left:15px;
  font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
        "
        >Know more</button></a>
    </div>
    </div>
    
</div>

                      <img
                        id="backimg"
                        loading="lazy"
                        src="${item[1]}"
                        class="project-thumb__video"
                      />
                    </div>
                   
                    
                  </div>
                 
                  </div>
        `;
      roleDiv.appendChild(listItem);
    });
    thisrow.appendChild(roleDiv);
    contentDiv.appendChild(roleDiv);
  });

  console.log("this is done");
} else {
  // Element not found
  console.error("Could not find the content div");
}
