import React, { useEffect, useLayoutEffect, useRef } from "react";
import vid from "./../../components/assets/vid/background.mp4";
import "./Landing.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import abacus from "../../components/assets/img/abacus.jpg";
import admin from "../../components/assets/img/admin.jpg";
import artme from "../../components/assets/img/artme.jpg";
import book from "../../components/assets/img/book.jpg";
import dash from "../../components/assets/img/dash.jpg";
import gallery from "../../components/assets/img/gallery.jpg";
import grow from "../../components/assets/img/grow.jpg";
import hub from "../../components/assets/img/hub.jpg";
import impact from "../../components/assets/img/impact.jpg";
import pot from "../../components/assets/img/pot.jpg";
import space from "../../components/assets/img/abacus.jpg";
import teach from "../../components/assets/img/teach.jpg";
import tobi from "../../components/assets/img/tobi.jpg";
import travel from "../../components/assets/img/travel.jpg";
import tune from "../../components/assets/img/tune.jpg";
import twitter from "../../components/assets/img/twitter.gif";
import gmail from "../../components/assets/img/gmail.gif";
import linked from "../../components/assets/img/linked.gif";
import insta from "../../components/assets/img/insta.gif";
import github from "../../components/assets/img/github.gif";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";

gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
  const video = useRef();
  const tl = gsap.timeline();
  const cursorRef = useRef();

  const func=()=>{
    var d= new Date()
    var da = d.toLocaleTimeString()
    document.getElementById("po").innerHTML=da
  
   
}
    setInterval(func,1000)


  useEffect(() => {
 
    document.body.style.overflowX = "hidden";
    video.current.playbackRate = 3;
    video.current.play()
    video.current.controls=false
    let ctx = gsap.context(() => {
      if (window.innerWidth > 1000) {
        tl.fromTo(
          ".single",
          {
            fontSize: "1rem",
            dureation: 1,
            stagger: 0.05,
            visibility: "hidden",
          },
          {
            fontSize: "12rem",
            dureation: 1,
            stagger: 0.05,
            visibility: "visible",
          }
        )
          .from(
            ".navb",
            {
              y: "-100px",
              opacity: -1,
              duration: 0.5,
            },
            "<"
          )
          .to(
            ".quote",
            {
              y: "-200px",
              duration: 1,
              scrollTrigger: {
                trigger: ".about",
                start: "top bottom",
                end: "bottom center",
                scrub: 2,
                // markers:true
              },
            },
            "<"
          );
      } else {
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[rgb(0,0,0)] ">
      <main className="min-h-screen w-full max-[1024px]:min-h-full">
        <video
          src={vid}
          ref={video}
          autoPlay
          muted
          loop
          controls={false}
          className="w-full fixed max-[1024px]:scale-y-[4.5]  scale-y-150 max-[600px]:scale-y-[7] vid"
        ></video>

        <nav className="relative px-[40px] py-[20px] flex justify-between align-center  max-[600px]:p-[15px] navb">
          <p className="flex flex-col leading-[20px]">
            <span className="text-gr font-grotesk text-xs">BHADMUS</span>
            <span className="text-gr font-grotesk text-xs">DAMILOLA</span>
          </p>

          <div className="flex justify-between w-2/4 max-[1024px]:w-auto max-[1024px]:flex-col  ">
            <p className="text-gryy leading-[20px] font-grotesk text-xs">
              AVAILABLE FOR FREELANCE <br /> WORK FROM JAN 2023
            </p>

            <a href="#contact" className="cta flex items-center">
              <span className="text-gr font-grotesk text-xs">CONTACT</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </nav>

        <div className="w-full px-[40px] mt-[20px] relative  max-[600px]:px-[15px]">
          <div className="w-full flex max-[600px]:flex-col-reverse">
            <a
              className="h-auto w-[100%] mt-[20px] relative link_container max-[600px]:h-[100px] max-[600px]:mt-0"
              href="#about"
            >
              <span className="h-full w-full bg-gry  cursor-pointer link flex justify-between items-end rounded-br-xl">
                <p className="ml-[10px] mb-[10px] font-cormorant font-bold">
                  ABOUT
                </p>
                <p className="mr-[10px] mb-[10px] font-cormorant font-bold">
                  01
                </p>
              </span>
            </a>
            <span className="text-gry text-[12rem] font-bold leading-[170px] max-[1024px]:text-[4rem] max-[1024px]:leading-[105px] max-[600px]:font-cormorant sing">
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem]  ">
                F
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem]  ">
                R
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem] ">
                O
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem] ">
                N
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem] ">
                T
              </span>
            </span>
          </div>
          <div className="w-full flex max-[600px]:flex-col-reverse ">
            <a
              className="h-auto w-[100%] mt-[20px] relative link_container  max-[600px]:h-[100px] max-[600px]:mt-0"
              href="#projects"
            >
              <span className="h-full w-full bg-gry  cursor-pointer link flex justify-between items-end rounded-br-xl">
                <p className="ml-[10px] mb-[10px] font-cormorant font-bold">
                  PROJECTS
                </p>
                <p className="mr-[10px] mb-[10px] font-cormorant font-bold">
                  02
                </p>
              </span>
            </a>
            <span className="text-gry text-[12rem] font-bold leading-[170px] max-[1024px]:text-[4rem] max-[1024px]:leading-[105px] max-[600px]:font-cormorant sing">
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem] ">
                E
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem] ">
                N
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[4rem] ">
                D
              </span>
            </span>
          </div>
          <div className="w-full flex max-[600px]:flex-col-reverse">
            <a href="#contact"  className="h-auto w-[100%] mt-[20px] relative link_container  max-[600px]:h-[100px] max-[600px]:mt-0">
              <span className="h-full w-full bg-gry  cursor-pointer link flex justify-between items-end rounded-br-xl">
                <p className="ml-[10px] mb-[10px] font-cormorant font-bold">
                  CONTACT
                </p>
                <p className="mr-[10px] mb-[10px] font-cormorant font-bold">
                  03
                </p>
              </span>
            </a>
            <span className="text-gry text-[12rem] font-bold leading-[170px] max-[1024px]:text-[3rem] max-[1024px]:leading-[105px] max-[600px]:font-cormorant sing">
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                D
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                E
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                V
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                E
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                L
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                O
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                P
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                E
              </span>
              <span className="hover:text-gryy  duration-500 single max-[1024px]:text-[3rem] ">
                R
              </span>
            </span>
          </div>
        </div>
      </main>

      <div
        className="px-[40px] w-full max-[600px]:px-[15px] mt-[50px]  mb-[200px] flex justify-between  items-center max-[600px]:flex-col max-[1024px]:mt-[100px] about"
        id="about"
      >
        <p className="text-gry text-[5rem] mt-[200px] max-[1000px]:mt-0 font-black  relative w-2/4 leading-[80px] about max-[600px]:w-full max-[1024px]:text-[3.5rem]  max-[1024px]:leading-[50px] font-dm text-left font-dm ">
          From Nothing <br /> to{" "}
          <span className=" w-[50px] h-[50px] bg-[#ffab9d80] rounded-[50%] inline-block"></span>{" "}
          <br /> making what people loves
        </p>

        <p className="text-gry text-[1.2rem] mt-[200px] max-[1000px]:mt-[100px] font-black  relative w-3/5 leading-[30px] about max-[600px]:w-full max-[1024px]:text-[1.5rem] max-[1024px]:font-medium max-[1024px]:leading-[30px] font-dm text-left ">
          <span>
            I'm a Creative web developer based in Lagos, Nigeria with passion
            for creating functional, responsive and interactive web Applications
          </span>
        </p>

        {/* <a
          className="active:scale-[0.9] duration-500 border-2 border-gry text-gry text-[3rem] relative font-cormorant p-[20px] max-[1000px]:mt-[50px] max-[1000px]:scale-[0.7]"
          href="/cv/mycv.pdf"
          download
        >
          Get my Resume
        </a> */}
      </div>

      <div className="w-full flex flex-col items-center relative mt-[200px]">
        <section className=" flex justify-center">
          <p className="text-gry text-[1.5rem] font-bold font-proza text-center w-3/4">
            I curate my projects in series, I've got three series still.
            Apprécier
          </p>
        </section>

        <span className="text-gry text-[12rem] font-black font-cormorant text-center  max-[600px]:text-[6rem]  ">
          (S-003)
        </span>

        <Box className="mt-[200px] px-[40px] w-full" id="projects">
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://grooow.netlify.app/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2023
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Grooow.com
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      01
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Groow - Digital Agency
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Groow - Digital Agency&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
              className="-mt-[100px] max-[1000px]:mt-[0px] "
            >
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://abacus-africa.netlify.app/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Abacus Africa
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      02
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Abacus Africa Abacus
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Abacus Africa Abacus&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <a  href="https://www.loopstudio.site/" target="_blank" className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]">
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span
                      className="text-gr font-cormorant font-black text-[2rem]"
                     
                      target="_blank"
                    >
                      Loopstudio
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      03
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Software Development Org
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Software Development Org&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://deduro-avt.netlify.app/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Deduro
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      04
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Deduro Avt Deduro Avt
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Deduro Avt Deduro Avt&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
              className="-mt-[100px] max-[1000px]:mt-0 "
            >
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://naked-green.netlify.app/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Impact
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      05
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Impact Product Launch
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Impact Product Launch&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/Art_me/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Artme
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      06
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Artme - Artist Network
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Artme - Artist Network&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
          </Grid>
        </Box>

        <span className="text-gry mt-[200px] text-[12rem] font-black font-cormorant text-center  max-[600px]:text-[6rem]  ">
          (S-002)
        </span>

        <Box className="mt-[200px] px-[40px] w-full">
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/RestaurantWebsite/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Afrikan Pot
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      01
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Restaurant Website
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Restaurant Website&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
              className="-mt-[100px] max-[1000px]:mt-0 "
            >
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/damax-travel/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Damax travels
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      02
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Travel agency Website
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Travel agency Website&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/Space-store/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Space Store
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      03
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Space documentries
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Space documentries&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/Feltteachers/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      FeltTeachers
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      04
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Teachers Assesment platform
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Teachers Assesment platform&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
              className="-mt-[100px] max-[1000px]:mt-0"
            >
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/Museum/home"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Museum
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      05
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Art Meseum Exhibition
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Art Meseum Exhibition&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/Admin-dashboard"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Admin Dashboard
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      06
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Admin Dashboard Site
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Admin Dashboard Site&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
          </Grid>
        </Box>

        <span className="text-gry mt-[200px] text-[12rem] font-black font-cormorant text-center  max-[600px]:text-[6rem]  ">
          (S-001)
        </span>

        <Box className="mt-[200px] px-[40px] w-full">
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/Music-Player-App/index.html"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Music player
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      01
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Dev tunes music player
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Dev tunes music player&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
              className="-mt-[100px] max-[1000px]:mt-0"
            >
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/Audio-Story-Teller/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2022
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Story Teller
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      02
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Audio story teller
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Audio story teller&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <a
                className="bg-gry w-full h-[400px] overflow-hidden flex flex-col justify-between project rounded-[3px]"
                href="https://damax-codz.github.io/devhub-dashboard/"
                target="_blank"
              >
                <p className="flex w-[100%] justify-between p-[20px]">
                  <span className="text-gr font-cormorant font-black text-[1rem]"></span>
                  <span className="text-gr font-cormorant font-black text-[1rem]">
                    2021
                  </span>
                </p>

                <div className="overflow-hidden">
                  <p className="flex w-[100%] justify-between p-[20px] title">
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      Dashboard
                    </span>
                    <span className="text-gr font-cormorant font-black text-[2rem]">
                      03
                    </span>
                  </p>
                  <p className="cnnContents ">
                    <span className="marqueeStyle text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;&nbsp;&nbsp;Admin Dashboard Site
                    </span>

                    <span className="marqueeStyle2 text-[10rem] text-gr  font-bold leading-[100px]">
                      &nbsp;Admin Dashboard Site&nbsp;
                    </span>
                  </p>
                </div>
              </a>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="w-full px-[40px] max-[600px]:px-[10px] relative mt-[200px]" id="contact">
        <div className="w-full  bg-gry relative rounded flex flex-col justify-between items-center pt-[50px]">
          <p className="text-[3rem] max-[600px]:text-[1.5rem] font-bold text-pink text-center leading-[60px] max-[600px]:leading-[40px] w-3/4 font-dm mb-[50px] ">
            Want to collaborate on a project or a freelance proposal, got some
            questions or want to have a little chat ? Feel free to reach out.
          </p>

          <Grid container className="w-full px-[10px] ">
            <Grid xs={12} md={6} lg={4}>
              <a href='https://twitter.com/Damax_hub' target="_blank" className="w-full h-[350px] border-2 border-gr p-[10px] flex flex-col items-center justify-between contact">
                <p className="flex justify-between text-pink w-full font-proza text-[1rem] font-normal">
                  <span>Twitter</span>
                  <span>Tw</span>
                </p>
                <div className="w-full flex justify-center overflow-hidden">
                  <img src={twitter} alt="" className="  icon" />
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
            <a href="mailto:damilolabhadmus41@gmail.com" target="_blank" className="w-full h-[350px] border-2 border-gr p-[10px] flex flex-col items-center justify-between contact">
                <p className="flex justify-between text-pink w-full font-proza text-[1rem] font-normal">
                  <span>Gmail</span>
                  <span>Gm</span>
                </p>
                <div className="w-full flex justify-center overflow-hidden">
                  <img src={gmail} alt="" className="  icon" />
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
            <a href="https://www.instagram.com/bhadmusdamilola/" target="_blank" className="w-full h-[350px] border-2 border-gr p-[10px] flex flex-col items-center justify-between contact">
                <p className="flex justify-between text-pink w-full font-proza text-[1rem] font-normal">
                  <span>Instagram</span>
                  <span>Ig</span>
                </p>
                <div className="w-full flex justify-center overflow-hidden">
                  <img src={insta} alt="" className="  icon" />
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
            <a href="https://github.com/damax-codz" target="_blank" className="w-full h-[350px] border-2 border-gr p-[10px] flex flex-col items-center justify-between contact">
                <p className="flex justify-between text-pink w-full font-proza text-[1rem] font-normal">
                  <span>Github</span>
                  <span>Gt</span>
                </p>
                <div className="w-full flex justify-center overflow-hidden">
                  <img src={github} alt="" className="  icon" />
                </div>
              </a>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
            <a href="https://www.linkedin.com/in/damilola-bhadmus-351074221/" target="_blank" className="w-full h-[350px] border-2 border-gr p-[10px] flex flex-col items-center justify-between contact">
                <p className="flex justify-between text-pink w-full font-proza text-[1rem] font-normal">
                  <span>Linkedin</span>
                  <span>Ln</span>
                </p>
                <div className="w-full flex justify-center overflow-hidden">
                  <img src={linked} alt="" className="  icon" />
                </div>
              </a>
            </Grid>
            {/* <Grid xs={12} md={6} lg={4}> */}
              {/* <div className="w-full h-[350px] border-2 border-gr "></div> */}
            {/* </Grid> */}
          </Grid>

          <div className="mt-[50px] w-full px-[10px] flex justify-between items-center ">
            <p className="text-[5rem] font-bold text-pink max-[600px]:text-[1.5rem] font-cormorant">LAGOS: <span id="po"></span> </p>
            <p className="text-[1rem] font-semibold text-pink text-[1.5rem] font-cormorant">DESIGN BY INSPIRATION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
