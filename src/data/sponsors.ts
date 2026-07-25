// import logoPlaceHolder from "@assets/logo_placeholder.svg";
import canonicalLogo from "@assets/sponsors/ubuntu.png";
import canonicalWhite from "@assets/sponsors/ubuntu_white.png";
import awsLogo from "@assets/sponsors/aws.png";
import awsWhite from "@assets/sponsors/aws_white.png";
import ksugLogo from "@assets/sponsors/ksug.png";
import groMetricLogo from "@assets/sponsors/grometric.svg";


export type Sponsor = {
    name: string,
    logoUrl: string,
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
                logoDarkTheme: awsWhite.src,
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
        sizeOnLargeScreen: 3,
        sizeOnMediumScreen: 3,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
        ] as Sponsor[]
    },
    {
        sponsorLevelName: "Community",
        sizeOnLargeScreen: 3,
        sizeOnMediumScreen: 3,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
            {
                name: "한국스프링사용자모임(KSUG)",
                logoUrl: ksugLogo.src,
                url: "https://www.ksug.org",
                description: "KSUG는 스프링을 사용하거나 관심있는 사람들이 모여 뉴스와 정보를 공유하고 문제를 같이 해결하는 곳이며 스터디, 세미나, 컨퍼런스 참여 등의 오프라인 활동을 합니다."
            }
        ] as Sponsor[]
    }
] satisfies Sponsors
