// import logoPlaceHolder from "@assets/logo_placeholder.svg";
import canonicalLogo from "@assets/sponsors/ubuntu.png";
import canonicalWhite from "@assets/sponsors/ubuntu_white.png";
import awsLogo from "@assets/sponsors/aws.png";
import awsWhite from "@assets/sponsors/aws_white.png";
import groMetricLogo from "@assets/sponsors/grometric.svg";
import ksugLogo from "@assets/sponsors/ksug.webp";
import cppKoreaLogo from "@assets/sponsors/cppkorea.svg";
import pythonKrLogo from "@assets/sponsors/pythonkr.png";
import hanbitLogo from "@assets/sponsors/hanbit-media.svg";
import fossforallDark from "@assets/sponsors/fossforall_darkmode.svg";
import fossforallLight from "@assets/sponsors/fossforall_lightmode.svg";


export type Sponsor = {
    name: string,
    logoUrl: string,
    logoInvert?: boolean,
    logoDarkTheme?: string,
    url: string,
    description: string,
    prevSponsored?: number,
}

type Sponsors = {
    sponsorLevelName: "Platinum" | "Gold" | "Venue" | "Bronze" | "Media" | "Community",
    sizeOnLargeScreen: number,
    sizeOnMediumScreen: number,
    sizeOnSmallScreen: number,
    showPopup: boolean,
    list: Sponsor[]
}[]

export const sponsors = [
    {
        sponsorLevelName: "Gold",
        sizeOnLargeScreen: 5,
        sizeOnMediumScreen: 5,
        sizeOnSmallScreen: 4,
        showPopup: true,
        list: [
            {
                name: "Ubuntu",
                logoUrl: canonicalLogo.src,
                logoDarkTheme: canonicalWhite.src,
                url: "https://ubuntu.com/",
                prevSponsored: 6,
                description: "Canonical은 대부분의 퍼블릭 클라우드 워크로드를 위한 OS이자 스마트 게이트웨이, 자율 주행 자동차 및 Advanced robot 등 새롭게 떠오르는 분야를 위한 OS인 Ubuntu를 개발 및 배포하는 회사입니다. Canonical은 상용 Ubuntu 사용자에게 엔터프라이즈 보안, 지원 및 서비스를 제공합니다."
            },
        ] as Sponsor[]
    },
    {
        sponsorLevelName: "Venue",
        sizeOnLargeScreen: 5,
        sizeOnMediumScreen: 5,
        sizeOnSmallScreen: 4,
        showPopup: true,
        list: [
            {
                name: "Amazon Web Services Korea",
                logoUrl: awsLogo.src,
                logoInvert: true,
                url: "https://aws.amazon.com/ko/",
                description: "Amazon Web Services(AWS)는 전 세계적으로 분포한 데이터 센터에서 200개가 넘는 완벽한 기능의 서비스를 제공하는, 세계적으로 가장 포괄적이며, 널리 채택되고 있는 클라우드입니다. 빠르게 성장하는 스타트업, 대기업, 주요 정부 기관을 비롯한 수많은 고객이 AWS를 사용하여 비용을 절감하고, 민첩성을 향상시키고, 혁신 속도를 높이고 있습니다."
            },
        ] as Sponsor[]
    },
    {
        sponsorLevelName: "Bronze",
        sizeOnLargeScreen: 3,
        sizeOnMediumScreen: 3,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
            {
                name: "GroMetric",
                logoUrl: groMetricLogo.src,
                url: "http://www.grometric.kr/",
                prevSponsored: 4,
                description: "그로메트릭은 고객의 지속가능한 성장을 위한 인텔리전스와 안전함을 제공합니다. 중장기적인 관점에서 데이터 메트릭을 통한 고객의 성장을 돕는 솔루션 개발을 목표하고 있어요. 아울러 다양한 OpenSource Software, Cloud, Security 솔루션으로 여러분의 성장과 함께 하고 싶어요."
            },
        ] as Sponsor[]
    },
    {
        sponsorLevelName: "Media",
        sizeOnLargeScreen: 2,
        sizeOnMediumScreen: 2,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
            {
                name: "한빛미디어",
                logoUrl: hanbitLogo.src,
                url: "https://www.hanbit.co.kr/media",
                prevSponsored: 3,
                description:
                    `한빛미디어(주)는 책으로 여는 IT 세상을 만들고 있습니다.

우리 시대의 주역들을 위한 프로그래밍, 컴퓨터 공학, IT 에세이와 더불어 일반 사용자를 위한 OA, 그래픽 등 IT 활용서와 나와 내 아이를 위한 실용서까지 다양한 분야의 책으로 IT 세상을 만들어 가고 있습니다.
                
IT 전문가와 미래의 전문가를 꿈꾸는 이의 동반자로 30년 한 길을 걸어온 한빛미디어(주)는 앞으로도 여러분과 함께 그려가는 멋진 미래를 꿈꾸며 '책으로 여는 IT 세상'을 만들어 가겠습니다. 한빛미디어가 만드는 IT뉴스레터 데브잇냥에도 많은 응원 부탁드립니다.
                
😸데브잇냥 구독하기 [https://hanbit.co.kr/devletter/](https://hanbit.co.kr/devletter/)`
            },
        ] as Sponsor[]
    },
    {
        sponsorLevelName: "Community",
        sizeOnLargeScreen: 2,
        sizeOnMediumScreen: 2,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
            {
                name: "한국스프링사용자모임(KSUG)",
                logoUrl: ksugLogo.src,
                url: "https://www.ksug.org",
                description: "한국 스프링 사용자 모임(KSUG)은 2007년, '개발자들이 서로 지식과 기회를 주고받는 유저 그룹 문화를 한국에도 만들자'는 생각에서 시작됐습니다. KSUG는 스프링, JVM 생태계의 개발자들이 동료로서 기술과 경험을 나누고 새로운 인연을 만들며 함께 성장하는 커뮤니티입니다. 커뮤니티 컨퍼런스 Spring Camp를 중심으로 가을 세미나와 스터디 등 다양한 활동을 이어오며, 국내 개발자 생태계의 성장에 기여하고 있습니다."
            },
            {
                name: "C++ Korea",
                logoUrl: cppKoreaLogo.src,
                url: "https://github.com/cppkorea",
                prevSponsored: 2,
                description: "한국에서 C++을 사용하는 사람들에게 도움이 되는 정보를 공유하고 서로 발전하기 위한 취지로 2013년 10월 8일에 개설한 커뮤니티입니다."
            },
            {
                name: "파이썬한국사용자모임",
                logoUrl: pythonKrLogo.src,
                url: "https://2026.pycon.kr",
                description: "파이썬 한국 사용자 모임은 파이썬을 사용하는 모든 사람들을 위한 열린 커뮤니티입니다. 2026년 파이콘은 동국대학교에서 8월 15일부터 17일까지 열립니다."
            },
            {
                name: "FOSS for All",
                logoUrl: fossforallLight.src,
                logoDarkTheme: fossforallDark.src,
                url: "https://fossforall.org",
                description: `FOSS for All (포스포올)은 지속 가능한 자유/오픈소스(Free and Open source) 생태계 구축을 위해 국내외 다양한 커뮤니티와 프로젝트가 모여 시작된 이니셔티브 입니다. 법인으로 보는 단체 등록과 첫 컨퍼런스 개최를 시작으로, 중장기적으로 비영리법인 설립과 공익법인(기부금단체) 지정과 프로젝트-커뮤니티-기업-사용자간 네트워크를 구축하는 등 다양한 활동을 전개하고자 합니다.

이를 통해, 한국내는 물론 전세계 다양한 오픈소스 프로젝트 및 커뮤니티가 직접 법인을 설립하거나, 많은 서류 작업을 하거나, 그 외 운영에 필요한 각종 정보를 알기 위한 시행착오를 하지 않고도 투명하면서도 중요하다고 생각되는 것에 더 집중할 수 있도록 지원하여 지속 가능한 자유/오픈소스 생태계 구축에 기여하고자 합니다.`
            }
        ] as Sponsor[]
    }
] satisfies Sponsors
