  ready(()=> {
    content(Body, `
       <div class="container-time">
         <span class="timeNow">12:00 AM</span><span class="timeNow">01:00 AM</span><span class="timeNow">02:00 AM</span><span class="timeNow">03:00 AM</span><span class="timeNow">04:00 AM</span><span class="timeNow">05:00 AM</span><span class="timeNow">06:00 AM</span><span class="timeNow">07:00 AM</span><span class="timeNow">08:00 AM</span><span class="timeNow">09:00 AM</span><span class="timeNow">10:00 AM</span><span class="timeNow">11:00 AM</span><span class="timeNow">12:00 PM</span><span class="timeNow">01:00 PM</span><span class="timeNow">02:00 PM</span><span class="timeNow">03:00 PM</span><span class="timeNow">04:00 PM</span><span class="timeNow">05:00 PM</span><span class="timeNow">06:00 PM</span><span class="timeNow">07:00 PM</span><span class="timeNow">08:00 PM</span><span class="timeNow">09:00 PM</span><span class="timeNow">10:00 PM</span><span class="timeNow">11:00 PM</span>
       </div>
       <div class="container-date"></div>
       <div class="container-content">
         <div class="container-player">
           <div class="player">
             <iframe width="100%" height="100%" frameborder="0" allow="fullscreen;autoplay;accelerometer;encrypted-media;gyroscope;picture-in-picture" referrerpolicy="no-referrer"></iframe>
           </div> 
         </div>
         <div class="container-list">
           <span id="active" target="/channel/rtm/tv1/index.html" name="TV1"></span>
           <span target="/channel/rtm/tv2/index.html" name="TV2"></span>
	   <span target="/channel/media-prima/tv3/index.html" name="TV3"></span>
           <span target="/channel/rtm/tv6/index.html" name="TV6"></span>
	   <span target="/channel/myfreeview/awani/tv7.html" name="TV7"></span>
	   <span target="/channel/media-prima/8tv/index.html" name="TV8"></span>
           <span target="/channel/media-prima/tv9/index.html" name="TV9"></span>
           <span target="/channel/rtm/tv-okey/index.html" name="TV OKEY"></span>
           <span target="/channel/rtm/berita-rtm/index.html" name="BERITA RTM"></span>
           <span target="/channel/rtm/sukan-rtm/index.html" name="SUKAN RTM"></span>          
           <span target="/channel/media-prima/didik-tv/index.html" name="DIDIK TV"></span>  
           <span target="/channel/myfreeview/awani/index.html" name="AWANI"></span>
           <span target="/channel/myfreeview/tv-ikim/index.html" name="TV IKIM"></span>
           <span target="/channel/myfreeview/tvs/index.html" name="TVS"></span>
	   <span target="/channel/myfreeview/cctv5/makkah.html" name="MAKKAH"></span>
    	   <span target="/channel/myfreeview/cctv5/iqraa.html" name="IQRAA TV"></span>
	   <span target="/channel/myfreeview/s8/index.html" name="TEMON SPORT"></span>
           <span target="/channel/myfreeview/fifa/index.html" name="FIFA"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/fifa2.html" name="FIFA2"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/beinsport.html" name="BEIN XTRA"></span>
           <span target="/channel/myfreeview/tv-alhijrah/beinsport3.html" name="BEIN SPORTS"></span>
           <span target="/channel/myfreeview/tv-alhijrah/beinsport1.html" name="BEIN1 SPORTS"></span>
           <span target="/channel/myfreeview/tv-alhijrah/beinsport2.html" name="BEIN2 SPORTS"></span>
	   <span target="/channel/myfreeview/cctv5/index.html" name="CCTV5"></span>
	   <span target="/channel/myfreeview/cctv5plus/index.html" name="CCTV5 PLUS"></span>
           <span target="/channel/myfreeview/tv-alhijrah/premier.html" name="PREMIER LEAGUE"></span>
           <span target="/channel/myfreeview/tv-alhijrah/spotv.html" name="SPOTV"></span>
    	   <span target="/channel/myfreeview/tv-alhijrah/spotv2.html" name="SPOTV2"></span>	   
	   <span target="/channel/myfreeview/indosiar/index.html" name="INDOSIAR"></span>
           <span target="/channel/myfreeview/sctv/index.html" name="SCTV"></span>	  
	   <span target="/channel/myfreeview/nets/index.html" name="NET TV"></span>
	   <span target="/channel/myfreeview/antv/index.html" name="ANTV"></span>	  
           <span target="/channel/myfreeview/transtv/rtv.html" name="RTV"></span>
	   <span target="/channel/myfreeview/dfc/daai.html" name="DAAI"></span>
           <span target="/channel/myfreeview/dfc/jtv.html" name="JTV"></span>	   
    	   <span target="/channel/myfreeview/transtv/transtv.html" name="TRANSTV"></span>
	   <span target="/channel/myfreeview/transtv/trans7.html" name="TRANS7"></span>	   
    	   <span target="/channel/myfreeview/tvone/index.html" name="TVONE"></span>
	   <span target="/channel/myfreeview/kompastv/index.html" name="KOMPAS TV"></span>
    	   <span target="/channel/myfreeview/metrotv/index.html" name="METRO TV"></span>
	   <span target="/channel/myfreeview/dfc/nusatv.html" name="NUSANTARA TV"></span>
    	   <span target="/channel/myfreeview/dfc/tvri.html" name="TVRI"></span>
    	   <span target="/channel/myfreeview/dfc/uchannel.html" name="U CHANNEL"></span>
	   <span target="/channel/myfreeview/dfc/rockac.html" name="ROCK ACTION"></span>
    	   <span target="/channel/myfreeview/dfc/rockent.html" name="ROCK ENTERTAIMENT"></span>
	   <span target="/channel/myfreeview/dfc/mce.html" name="MCE"></span>
     	   <span target="/channel/myfreeview/dfc/tvn.html" name="TVN"></span>
	   <span target="/channel/myfreeview/dfc/tvnmov.html" name="TVN MOVIE"></span>
	   <span target="/channel/myfreeview/kix/index.html" name="KIX"></span>
           <span target="/channel/myfreeview/dfc/celestial.html" name="CELESTIAL"></span>
    	   <span target="/channel/myfreeview/dfc/index.html" name="DFC"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/hbofam.html" name="HBO FAMILY"></span>
    	   <span target="/channel/myfreeview/tv-alhijrah/hbohit.html" name="HBO HIT"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/hbosig.html" name="HBO SIGNATURE"></span>
    	   <span target="/channel/myfreeview/tv-alhijrah/hbo.html" name="HBO"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/hbomax.html" name="HBO 21+"></span>
    	   <span target="/channel/myfreeview/dfc/krarirang.html" name="ARIRANG KOREA"></span>
	   <span target="/channel/myfreeview/dfc/kbsdrama.html" name="KBS DRAMA"></span>
    	   <span target="/channel/myfreeview/dfc/kbs2.html" name="KBS KOREA"></span>
	   <span target="/channel/myfreeview/dfc/kbsworld.html" name="KBS WORLD"></span>
	   <span target="/channel/myfreeview/dfc/drakor.html" name="DRAKOR"></span>
           <span target="/channel/myfreeview/dfc/twfood.html" name="TW FOOD"></span>
           <span target="/channel/myfreeview/cctv5/cctv1.html" name="CCTV1"></span>
	   <span target="/channel/myfreeview/cctv5/cctv2.html" name="CCTV2"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/spore.html" name="SPORE8"></span>
           <span target="/channel/myfreeview/tv-alhijrah/ch5.html" name="SPORE5"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/chu.html" name="SPOREU"></span>
    	   <span target="/channel/myfreeview/tv-alhijrah/cna.html" name="SPORE CNA"></span>
	   <span target="/channel/myfreeview/tv-alhijrah/vasantham.html" name="SPORE VASANTHAM"></span>
           <span target="/channel/myfreeview/tv-alhijrah/suriah.html" name="SPORE SURIAH"></span>
         </div>
       </div>
    `);

    const iframe = slt("iframe");
    const first = slt("#active");
    const playlist = ".container-list span";
    const timeNow = ".timeNow";
    const element = ".container-time .timeNow";
    
    attr(iframe, {src: "https://williamyaps.github.io/tv/channel/rtm/tv1/index.html"});

    readyStart(iframe, ()=> {
      style(iframe, {visibility: "visible"});
    });
    
    style(first, {
      color: "#2979FF",
      background: "#0d0d0d"
    });

    each(playlist, list => {
      html(list, attr(list, "name"));
      click(list, (e)=> {
        e.preventDefault();
        each(playlist, rv => {
          removeAttr(rv, "id");
          style(rv, {
            color: "#f2f2f2",
            background: "#262626"
          });
        });
        fadeOut(iframe, 100);
        attr(iframe, {src: `https://williamyaps.github.io/tv${attr(list, "target")}`});
        style(list, {
          color: "#7ccae9"
        });
        attr(list, {id: "active"});
        readyStart(iframe, ()=> {
          fadeIn(iframe, 100);
          timeOut(()=> {
            style("#active", {
              color: "#2979FF",
              background: "#0d0d0d"
            });
          }, 500);
        });
      });
    });

    each(timeNow, time => {
      var thisTime = html(time);
      var thisHour = thisTime.replace(thisTime.slice(2), "");
      var thisDay = thisTime.slice(6);
      event(()=> {
        setInt(()=> {
          var curTime = new Date().toLocaleTimeString("en-US", {hour:'2-digit', minute:'2-digit'});
          var curHour = curTime.replace(curTime.slice(2), "");
          var curDay = curTime.slice(6);
           if (match(thisDay, curDay)) {
             if (match(thisHour, curHour)) {
               each(element, elm => {
                 removeAttr(elm, "id");
                 style(elm, {
                   color: "#b3b3b3",
                   paddingLeft: "20px",
                   paddingRight: "20px",
                   background: "#323232"
                 });
                 var end = html(elm);
                 var hour = end.replace(end.slice(2), "");
                 var day = end.slice(6);
                 html(elm, `${hour}:00 ${day}`);
               });
               attr(time, {id: "now"});
               var now = slt("#now");
               style(now, {
                 color: "#7ccae9",
                 paddingLeft: "15%",
                 paddingRight: "15%",
                 background: "#404040"
               });
               html(now, curTime);
               scroll(now);
             }
             return this;
           }
         }, 1000);
      });
    });

    readyLoad(()=> {
       var curDate = new Date().toLocaleDateString("en-US", {weekday:'short', month:'short', day:'numeric'});
       var curUrl = window.location.href;
       status(curUrl, 
         (ok)=> {html(".container-date", `<span>${curDate}</span><span><span style="color:#90ee90;">&#x25cf;</span>&nbsp; Online</span>`)},
         (undefined)=> {html(".container-date", `<span>${curDate}</span><span><span style="color:#ff0000;">&#x25cf;</span>&nbsp; Offline</span>`)},
         (error)=> {html(".container-date", `<span>${curDate}</span><span><span style="color:#ff0000;">&#x25cf;</span>&nbsp; 404</span>`)}
       );
    });
  });
