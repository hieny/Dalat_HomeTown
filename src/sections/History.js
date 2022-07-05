import React from "react";
import styled from "styled-components";
import styles from "../styles/styles.module.css";
import Dr_Yesin from "../assets/DrYesin.png";
import In1900s from "../assets/1920s.png";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import dalat_0 from "../assets/dalat_0.jpg";
import dalat_1 from "../assets/dalat_1.jpg";
import dalat_2 from "../assets/dalat_2.jpg";
import dalat_3 from "../assets/dalat_3.jpg";
import dalat_4 from "../assets/dalat_4.jpg";
import dalat_5 from "../assets/dalat_5.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Left = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  img {
    width: 100%;
    height: 100vh;
  }
`;

const Img = styled(motion.img)``;

const Right = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 100vh;
`;

const Tittle = styled.p`
  font-size: ${(props) => props.theme.fontxxxl};
  text-align: center;
`;

const DrYersin = styled.p`
  font-size: ${(props) => props.theme.fontxl};
  text-shadow: 5px 5px 10px ${(props) => props.theme.body};
  text-align: center;
`;

const HistoryDetail = styled.p`
  position: absolute;
  right: 0;
  font-size: ${(props) => props.theme.fontxl};
  width: 70%;
  text-align: center;
`;

const Img1920 = styled.div`
  margin: 0 300px;
  img {
    width: 100%;
    height: 700px;
  }
`;

const HistoryDetail1900s = styled.p`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  font-size: ${(props) => props.theme.fontxl};
  width: 100%;
  text-align: center;
  z-index: 2;
`;

const ImgNow = styled.div`
  border: 3px solid black;
  witdh: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.text};
  margin: 0 10px;
  img {
    padding: 25px;
    width: 100%;
    height: 100%;
  }
`;

const History = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className={styles.bgHistory}>
      <Parallax pages={15}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Tittle>1890</Tittle>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 3.5 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <Left>
              <Img
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                src={Dr_Yesin}
                alt="img"
              />
            </Left>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div>
            <DrYersin>Dr.Yersin</DrYersin>
            <p>
              Alexandre Yersin in 1893, around the time he explored the Lam Vien
              plateau.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div>
            <HistoryDetail>
              In 1890, after successfully defending his doctorate in medicine
              and working at the Institut Pasteur in Paris, Alexandre Yersin
              decided to leave the laboratory to embark on adventures. He
              applied to work for Messageries Maritimes with the hope of going
              to colonial countries. From October 1890, Yersin served on the
              Saigon - Manila sea route as a physician, and in April 1891, he
              transferred to the Saigon ship operating on the Saigon - Hai Phong
              route. On July 29, 1891, while the train stopped at Nha Trang,
              Yersin made his first expedition with the intention of traveling
              by mountain road from Nha Trang to Saigon within 10 days. But the
              trip was not successful. After passing through Phan Rang, Phan Ri
              and reaching Ta La, the vicinity of present-day Di Linh, Yersin
              was told by locals that it took at least 9 to 10 days to reach
              Saigon. He decided to return to Nha Trang in time to board the
              train and continue his journey to the North. In October 1892,
              Alexandre Yersin returned to Paris and sought to lobby for further
              exploration. With the help of a few acquaintances, especially
              Louis Pasteur and Émile Duclaux, Yersin was funded by the French
              Ministry of Education to undertake a scientific survey. He
              returned to Saigon in early 1893, went to see Governor General
              Jean-Marie de Lanessan and was tasked with surveying a road from
              Saigon deep into Montagnard land, ending at a convenient location
              on the coast of Central Vietnam. On February 24, 1893, Yersin and
              five others left Saigon to make the first leg from Saigon to Phan
              Thiet, crossing the Tanh Linh area. In addition to the expedition
              equipment, Yersin also carried some smallpox vaccine to vaccinate
              the people of the areas he was going through. The expedition
              passed through Ta Cu, Tanh Linh, then to Phan Thiet, from here
              Yersin went to Nha Trang by Cai Quan road to meet the ambassador
              Lenormand, then back to Phan Ri. On the morning of April 8, 1893,
              he left Phan Ri to make the second leg of Phan Ri - Tanh Linh,
              crossing the mountains. The caravan on this road was very crowded,
              including 80 villagers, 6 riding horses and an elephant. In Lao
              Gouan, in present-day Duc Trong district, Yersin met Tong Vit Ca,
              a Vietnamese who contracted tax collection from Montagnard cantons
              under Phan Ri. Tong Vit Ca expressed his wish to accompany Yersin
              to Ta La. The expedition arrived at Ta La on April 25, where
              Yersin bid farewell to Tong Vit Ca and continued his journey to
              Droum village, across La Nga river back to Tanh Linh. On May 30,
              1893, Alexandre Yersin started making the third leg from Tanh Linh
              to Phan Rang by a different mountain road from the previous one.
              After following the left bank of La Nga River to return to Droum,
              the expedition crossed the river to Tia Lao, a place that was
              recorded on Major Humann's map. On June 11, Yersin arrived at
              Bross, located at the bottom of a deep valley through which the
              Dong Nai River flows. To the north is Tadoung mountain, in
              present-day Dak Nong province. From Tadoung, Yersin descended the
              mountain to return to Rioung and to After two days of traveling,
              at 15:30 on June 21, 1893, Yersin stepped out of the pine forest
              and discovered Lam Vien plateau. . In the diary of his journey, he
              just wrote down: "3h30: large bare plateau, undulating hills".
              Yersin spent the night in Dankia and returned to Rioung under a
              heavy rain. After leaving Rioung, the expedition followed the
              valley of the Da Nhim River and reached Phan Rang on June 26,
              1893.
            </HistoryDetail>
          </div>
        </ParallaxLayer>

        {/* 1916-1945  */}
        <ParallaxLayer
          offset={5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Tittle>From 1916 To 1945</Tittle>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 6, end: 9 }}
          style={{ ...alignCenter, justifyContent: "flex-between" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <Img1920>
              <img src={In1900s} alt="img" />
            </Img1920>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={7} style={{ ...alignCenter }}>
          <div>
            <HistoryDetail1900s>
              The period from 1916 to 1945 was a tumultuous period in history.
              The two world wars had a profound impact on the political and
              social situation. After the First World War, colonial exploitation
              in Indochina became active, the capital investment of French
              capital from 170 million francs in 1924 to 585 million francs in
              1930. Inflation In France, the value of the Indochinese silver and
              raw materials increased, boosting the investment of French capital
              in the period 1924 to 1930 to 3 billion francs. The development of
              the economy led to an increasing presence of foreigners in Vietnam
              with the number of 30,000 French in 1937 and 466,000 overseas
              Chinese in 1943. Two world wars also caused the demand for
              resorts. Foreigners' places increased, becoming an opportunity to
              help Da Lat tourism city develop. Along with the establishment of
              administrative status, the population of Da Lat also increased
              strongly and construction works gradually sprang up. In 1923, this
              place had only 1,500 inhabitants, by 1938, the city's population
              had reached 9,000 people and in 1944, Da Lat became an urban area
              of ​​more than 25,000 people. In 1921, architect Ernest Hébrard
              received the task of setting up the Dalat planning project.
              Completed in August 1923, Ernest Hébrard's project expressed a
              great vision and ambition: to build Da Lat to become the capital
              of the Indochinese Federation. In 1933, architect Louis Georges
              Pineau launched a city embellishment project with a more realistic
              conception and most of the key features of this project are still
              retained in the Da Lat embellishment and development program.
              1943. In the period from 1916 to World War II, the infrastructure
              works of Da Lat were also gradually completed. In 1918, the power
              plant was built, from 1919 to 1921, schools, treasury, post office
              and dispensary appeared one after another.[48] In the early years
              of the twentieth century, there were only wooden houses in Da Lat.
              In 1908, the first brick house without paint appeared. But in the
              1920s and 1930s, a series of large-scale architectural works were
              built, such as Langbian Palace Hotel, Yersin High School, Da Lat
              Railway Station, Governor's Palace... During this period,
              institutions Cultural and educational facilities also began to
              develop, some schools such as Yersin High School, Couvent des
              Oiseaux or Cavalry Army attracted students from all over Vietnam
              and Indochina. In 1938, when the train station was completed, the
              travel time from Hanoi to Da Lat took only 48 hours, and tourists
              came to the resort city more and more crowded. In 1944, Da Lat was
              almost the capital of the Indochina Federation when the Governor
              General and most of the important offices moved here to work.
              After nearly 30 years of construction, Da Lat in 1945 became a
              beautiful city of the Far East, an important educational center
              and an attractive tourist destination.
            </HistoryDetail1900s>
          </div>
        </ParallaxLayer>

        {/* Now */}

        <ParallaxLayer
          offset={10}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Tittle>1986 to Now</Tittle>
        </ParallaxLayer>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <ParallaxLayer
                offset={10.75}
                speed={0.5}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <ImgNow>
                  <img src={dalat_0} alt="img" />
                </ImgNow>
              </ParallaxLayer>
            </div>
            <div className="col-md-6">
              <ParallaxLayer
                offset={11}
                speed={0.5}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <ImgNow>
                  <img src={dalat_1} alt="img" />
                </ImgNow>
              </ParallaxLayer>
            </div>
            <div className="col-md-3">
              <ParallaxLayer
                offset={11.25}
                speed={0.5}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <ImgNow>
                  <img src={dalat_2} alt="img" />
                </ImgNow>
              </ParallaxLayer>
            </div>
            <div className="col-md-4">
              <ParallaxLayer
                offset={11.45}
                speed={0.5}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <ImgNow>
                  <img src={dalat_3} alt="img" />
                </ImgNow>
              </ParallaxLayer>
            </div>
            <div className="col-md-7">
              <ParallaxLayer
                offset={11.95}
                speed={0.5}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <ImgNow>
                  <img src={dalat_4} alt="img" />
                </ImgNow>
              </ParallaxLayer>
            </div>

            <div className="col-md-12">
              <ParallaxLayer
                offset={12.25}
                speed={0.5}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <ImgNow>
                  <img src={dalat_5} alt="img" />
                </ImgNow>
              </ParallaxLayer>
            </div>
          </div>
        </div>
        <Button />
      </Parallax>
    </div>
  );
};

export default History;
