import React from "react";
import { Group } from "../../components/Group";
import { MaskGroup } from "../../components/MaskGroup";
import { Rectangle } from "../../components/Rectangle";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#fbf8cc] flex flex-row justify-center w-full">
      <div className="bg-light-yellow overflow-hidden w-[1440px] h-[3984px] relative">
        <div className="absolute w-[1301px] h-[756px] top-[37px] left-[-437px]">
          <div className="absolute w-[1029px] h-[748px] top-[8px] left-0">
            <img className="absolute w-[127px] h-[22px] top-0 left-[536px]" alt="llouzada" src="/img/llouzada.png" />
            <div className="absolute w-[1029px] h-[726px] top-[22px] left-0">
              <img
                className="absolute w-[592px] h-[602px] top-[124px] left-[437px]"
                alt="Vector"
                src="/img/vector.svg"
              />
              <div className="absolute w-[105px] h-[29px] top-[635px] left-[867px]">
                <div className="absolute w-[5px] h-[30px] top-0 left-[6px] bg-dark-brown rounded-[10px] rotate-[24.00deg]" />
                <div className="absolute w-[5px] h-[30px] top-0 left-[28px] bg-dark-brown rounded-[10px] rotate-[24.00deg]" />
                <div className="absolute w-[5px] h-[30px] top-0 left-[50px] bg-dark-brown rounded-[10px] rotate-[24.00deg]" />
                <div className="absolute w-[5px] h-[30px] top-0 left-[72px] bg-dark-brown rounded-[10px] rotate-[24.00deg]" />
                <div className="absolute w-[5px] h-[30px] top-0 left-[94px] bg-dark-brown rounded-[10px] rotate-[24.00deg]" />
              </div>
              <div className="absolute w-[50px] h-[56px] top-0 left-[847px]">
                <div className="absolute w-[24px] h-[24px] top-[16px] left-0">
                  <div className="relative h-[24px]">
                    <div className="absolute w-[6px] h-[24px] top-0 left-[9px] bg-dark-brown rounded-[6px]" />
                    <div className="absolute w-[6px] h-[24px] top-0 left-[9px] bg-dark-brown rounded-[6px] -rotate-90" />
                  </div>
                </div>
                <div className="absolute w-[24px] h-[24px] top-[32px] left-[26px]">
                  <div className="relative h-[24px]">
                    <div className="absolute w-[6px] h-[24px] top-0 left-[9px] bg-dark-brown rounded-[6px]" />
                    <div className="absolute w-[6px] h-[24px] top-0 left-[9px] bg-dark-brown rounded-[6px] -rotate-90" />
                  </div>
                </div>
                <div className="absolute w-[24px] h-[24px] top-0 left-[26px]">
                  <div className="relative h-[24px]">
                    <div className="absolute w-[6px] h-[24px] top-0 left-[9px] bg-dark-brown rounded-[6px]" />
                    <div className="absolute w-[6px] h-[24px] top-0 left-[9px] bg-dark-brown rounded-[6px] -rotate-90" />
                  </div>
                </div>
              </div>
              <MaskGroup className="!absolute !left-0 !top-[54px]" />
            </div>
          </div>
          <div className="absolute w-[282px] h-[27px] top-0 left-[1019px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[18px] tracking-[0] leading-[normal]">
              Casa
            </div>
            <div className="left-[230px] font-normal text-dark-blue text-[18px] leading-[normal] absolute top-0 [font-family:'Poppins',Helvetica] tracking-[0]">
              Trabalho
            </div>
            <div className="top-0 left-[115px] font-normal text-dark-blue text-[18px] leading-[normal] absolute [font-family:'Poppins',Helvetica] tracking-[0]">
              Sobre
            </div>
          </div>
        </div>
        <div className="absolute top-[166px] left-[774px] [font-family:'Poppins',Helvetica] font-medium text-dark-blue text-[35px] tracking-[0] leading-[normal]">
          Olá, eu sou Luciene Louzada,
        </div>
        <div className="absolute w-[343px] top-[703px] left-[880px] [font-family:'Poppins',Helvetica] font-medium text-dark-blue text-[35px] tracking-[0] leading-[normal]">
          Fale comigo.
        </div>
        <p className="absolute w-[900px] top-[1136px] left-[97px] [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[30px] tracking-[0] leading-[44px]">
         Sou Luciene, uma pessoa curiosa e apaixonada por programação, procuro aprender coisas novas e sempre estudando tecnologias. Hoje tenho conhecimento em backend e inteligência artificial
        </p>
        <div className="absolute w-[936px] h-[495px] top-[1999px] left-[97px]">
          <div className="absolute w-[900px] h-[138px] top-[357px] left-0">
            <div className="absolute w-[900px] top-[94px] left-0 [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[24px] tracking-[0] leading-[44px]">
              {""}
            </div>
            <div className="h-[116px] left-0 font-extrabold text-too-light-yellow text-[100px] leading-[116px] whitespace-nowrap absolute top-0 [font-family:'Poppins',Helvetica] tracking-[0]">
              Trabalho.
            </div>
          </div>
          <p className="absolute w-[644px] top-0 left-[292px] [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[24px] tracking-[0] leading-[44px]">
            Vs code
            <br />
            Matlab
            <br />
            MongoDB
            <br />
            Docker Desktop
            <br />
            Postman
            <br />
            Beeceptor
            <br />
            Heroku
            <br />
            Microsoft Azure
          </p>
        </div>
        <p className="absolute w-[640px] top-[3571px] left-[596px] [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[50px] tracking-[0] leading-[45px]">
          Acompanhe meus projetos no github e linkedin
        </p>
        <div className="absolute w-[331px] top-[3768px] left-[596px] [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[24px] tracking-[0] leading-[44px] whitespace-nowrap">
          llouzada_s@outlook.com
        </div>
        <div className="absolute w-[321px] h-[440px] top-[3812px] left-[596px]">
          <p className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[24px] tracking-[0] leading-[44px]">
            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#030445] text-[24px] tracking-[0] leading-[44px]">
            </span>
            <a href="https://github.com/llouzadas" rel="noopener noreferrer" target="_blank">
              <span className="underline">
                llouzadas (github.com)
                <br />
                <br />
              </span>
            </a>
            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#030445] text-[24px] tracking-[0] leading-[44px]">
              <br />
            </span>
          </p>
          <p className="absolute top-[44px] left-0 [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[24px] tracking-[0] leading-[44px]">
            <a href="https://www.linkedin.com/in/llouzada/" rel="noopener noreferrer" target="_blank">
              <span className="underline">
                {" "}
                Luciene | LinkedIn
                <br />
              </span>
            </a>
            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#030445] text-[24px] tracking-[0] leading-[44px]">
              (34)9 9740-3626
              <br />
              <br />
            </span>
          </p>
        </div>
        <div className="absolute top-[3150px] left-[97px] [font-family:'Poppins',Helvetica] font-semibold text-dark-blue text-[24px] tracking-[0] leading-[44px] whitespace-nowrap">
          Alguns estudos de caso
        </div>
        <div className="absolute top-[3150px] left-[777px] [font-family:'Poppins',Helvetica] font-semibold text-dark-blue text-[24px] tracking-[0] leading-[44px] whitespace-nowrap">
          Alguns estudos de caso
        </div>
        <p className="absolute w-[560px] top-[3194px] left-[97px] [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[18px] tracking-[0] leading-[32px]">
          Chatbot/Api com linguagem JavaScript NodeJs uma Api que interage com whatsapp e opções de diálogo, usando mais de uma Api
        </p>
        <p className="absolute w-[560px] top-[3194px] left-[777px] [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[18px] tracking-[0] leading-[32px]">
          Criei um simulador de voo no editor Matlab utilizando linguagem C sharp contendo variáveis, matrizes e vetores
        </p>
        <div className="absolute w-[560px] h-[443px] top-[2707px] left-[97px]">
          <div className="absolute top-[399px] left-0 [font-family:'Poppins',Helvetica] font-normal italic text-dark-blue text-[15px] tracking-[0] leading-[44px] whitespace-nowrap">
            24 de janeiro de 2023
          </div>
          <Rectangle className="!absolute !left-0 !top-0" property1="default" showRectangle8={false} />
        </div>
        <div className="absolute w-[560px] h-[443px] top-[2707px] left-[777px]">
          <div className="absolute top-[399px] left-0 [font-family:'Poppins',Helvetica] font-normal italic text-dark-blue text-[15px] tracking-[0] leading-[44px] whitespace-nowrap">
            05 de novembro de 2023
          </div>
          <Rectangle className="!absolute !left-0 !top-0" property1="default" showRectangle8={false} />
        </div>
        <div className="absolute w-[904px] h-[182px] top-[1414px] left-[384px]">
          <p className="absolute w-[900px] top-[50px] left-0 [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[24px] tracking-[0] leading-[44px]">
            Onde comecei a me interessar pela minha carreira de programação e tive a oportunidade de trabalhar com tecnologia em uma empresa da Accenture que me proporcionou muito conhecimento
          </p>
          <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-semibold text-dark-blue text-[24px] tracking-[0] leading-[40px] whitespace-nowrap">
            2021-2022 
          </div>
        </div>
        <div className="absolute w-[904px] h-[360px] top-[1623px] left-[389px]">
          <div className="absolute w-[904px] h-[358px] top-0 left-0">
            <p className="absolute w-[900px] top-[50px] left-0 [font-family:'Poppins',Helvetica] font-normal text-dark-blue text-[24px] tracking-[0] leading-[44px]">
              Html 
              <br />
              JavaScript NodeJs
              <br />
              C Sharp e CSS
              <br />
              Docker File
              <br />
              NoSql
            </p>
            <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-semibold text-dark-blue text-[24px] tracking-[0] leading-[40px] whitespace-nowrap">
              2022-2024 Linguagem que venho estudando e praticando
            </div>
          </div>
          <p className="absolute w-[900px] top-[320px] left-0 [font-family:'Poppins',Helvetica] font-semibold text-dark-blue text-[24px] tracking-[0] leading-[40px]">
            Editores de código que uso atualmente
          </p>
        </div>
        <div className="absolute w-[620px] h-[292px] top-[345px] left-[687px] [font-family:'Poppins',Helvetica] font-extrabold text-dark-blue text-[90px] tracking-[0] leading-[70px]">
          Engenharia de Software
        </div>
        <div className="h-[116px] top-[988px] left-[97px] font-extrabold text-too-light-yellow text-[100px] leading-[116px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] tracking-[0]">
          sobre.
        </div>
        <p className="absolute w-[1044px] top-[2513px] left-[17px] [font-family:'Poppins',Helvetica] font-normal text-[#09075f] text-[24px] tracking-[0] leading-[44px]">
          {" "}
          Sou aluno da instituição Estácio em atuação em engenharia de software: Projetar, realizar testes, desenvolver softwares, realizar manutenção das soluções criadas.<br />
          Abordagem de novos projetos e soluções, atuando no mundo tecnológico
        </p>
        <div className="absolute h-[116px] top-[3414px] left-[97px] [font-family:'Poppins',Helvetica] font-extrabold text-too-light-yellow text-[100px] tracking-[0] leading-[116px] whitespace-nowrap">
          contato.
        </div>
        <Group
          className="!h-[65px] !absolute !left-[1008px] !w-[170px] !top-[809px]"
          divClassName="!left-[39px] !top-[14px]"
          overlapGroupClassName="!h-[65px]"
          property1="default"
          rectangleClassName="!h-[58px] !w-[164px]"
          rectangleClassNameOverride="!h-[58px] !w-[164px]"
          text="Bater papo"
        />
        <div className="top-[1427px] absolute w-[13px] h-[13px] left-[353px] bg-dark-blue rounded-[6.5px]" />
        <div className="top-[1636px] absolute w-[13px] h-[13px] left-[353px] bg-dark-blue rounded-[6.5px]" />
        <div className="top-[1957px] absolute w-[13px] h-[13px] left-[353px] bg-dark-blue rounded-[6.5px]" />
      </div>
    </div>
  );
};
