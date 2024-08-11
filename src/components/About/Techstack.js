import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from "react-icons/di";
import { SiDocker, SiLinux, SiNextdotjs, SiRedis, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { DiLinux } from "react-icons/di";



import {
 
  SiFirebase,
 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* //languages */}

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

{/* //frameworks */}
    
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>

 <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
    
      
    </Row>
  );
}

export default Techstack;
