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
        [
          "https://nextdayanimations.com/wp-content/uploads/2022/02/typing.gif",
          "",
        ],
        `This is the Home for my Blogs. I share guides, insights and a few findings of various topics.
I share things which are useful for others in a context of Tech, Health, Documents, Applications etc.`,
        "https://blogs.blazingbane.com",
      ],
      [
        "Rimmind",
        "https://scitechdaily.com/images/Brain-Patterns-Illustration.gif",
        [
          "https://nextdayanimations.com/wp-content/uploads/2022/02/typing.gif",
          "",
        ],
        "A fully costume developed application to organize things running in our brain do check this out a cool one",
        "https://rimmind.blazingbane.com",
      ],
    ],
    [],
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
            background="transparent"
            speed="1"
            loop
            autoplay
        ></lottie-player> 
    `
       }
    <div class="ceck">
    <h2 class="text-center text-2xl ">${item[0]}</h2>
        <h4 style="width:400px" class="text-center text-base ">${item[3]}</h4>
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
                    <!-- Small Img  -->
                    <img
                      alt=""
                      loading="lazy"
                      src="${item[1]}"
                      sizes="(max-width: 479px) 95vw, (max-width: 767px) 48vw, (max-width: 991px) 47vw, 100vw"
                      class="project-item__media is--thumb"
                    />
                    
                  </div>
                  <div id="smallConttent" class="project-item__info-w">
                    <h2 class="p-reg is--bold text-center">${item[0]}</h2>
                    <p class="text-xs w-5/6 ">${item[3]}</p>
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
padding-top: 3px;
padding-right: 7px;
padding-bottom:3px;
padding-left:7px;
  font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
  font-size: 32px;
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
        ><h5>Click more</h5></button></a>
    </div>
                    <div class="flex-h gap-tiny a-center w-condition-invisible">
                      <img
                        src="${item[1]}"
                        loading="lazy"
                        alt=""
                        class="views-icon"
                      />
                     
                    </div>
                  </div>
  <style>
    @media (min-width: 1024px) {
      #smallConttent {
        display: none;
      }
    }

    /* Show the component on touchscreens */
    @media (hover: none) {
      #smallConttent {
        display: block; /* or any other display value you prefer */
      }
    }
  </style>
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
