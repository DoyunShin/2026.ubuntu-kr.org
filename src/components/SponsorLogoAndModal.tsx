
import { useLayoutEffect, useState, type MouseEvent } from "react";
import Markdown from "marked-react";
import * as m from "../paraglide/messages";
import { setLocale, type Locale } from "@paraglide/runtime";
import useTheme from "src/hooks/useTheme";

type SponsorLogoAndModalProps = {
    name: string,
    level: string,
    logoImageSrc: string,
    locale?: Locale,
    description: string,
    url: string,
    showPopup: Boolean,
    index: number,
    invertedLogo?: string,
    prevSponsored?: number
}

export default function SponsorLogoAndModal(props: SponsorLogoAndModalProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const { theme } = useTheme();

    const closeHandler = (e: KeyboardEvent|MouseEvent<HTMLButtonElement>) => {
        if (e.type === "click" || (e as KeyboardEvent).key === "Escape") {
            setModalOpen(false);
            document.removeEventListener("keydown", closeKeyListener);
        }
    };
    const closeKeyListener = (e: KeyboardEvent) => closeHandler(e);
    setLocale(props.locale ?? "ko");


    console.log(theme);

    return (
        <>
            <button className="p-button--base" onClick={() => {
                if(props.showPopup) { 
                    setModalOpen(true); 
                    document.addEventListener("keydown", closeKeyListener);
                }
            }} aria-controls={`modal-${props.level}-${props.index}`} style={{ display: "flex", alignItems: "start" }}>
                <img src={
                    theme === "dark" && props.invertedLogo 
                        ? props.invertedLogo
                        : props.logoImageSrc
                    }
                    alt={props.name} loading="lazy" decoding="async"
                    style={{ maxHeight: props.level === "Community" ? "3rem" : "10rem", minWidth: "2.4rem" }}
                />
                {props.prevSponsored &&
                    <p aria-label={`Sponsored ${props.prevSponsored} times`} style={{ marginTop: "-0.5rem", textAlign: "end" }}>
                        <span className="p-badge">
                            {props.prevSponsored}
                        </span>
                    </p>
                }
            </button>
           
            <div className="p-modal" id={`modal-${props.level}-${props.index}`} style={{display: modalOpen && props.showPopup ? "flex" : "none"}}>
            <section className="p-modal__dialog" role="dialog" aria-modal={modalOpen && props.showPopup ? "true":"false"} aria-labelledby="modal-title" aria-describedby="modal-description">
                <header className="p-modal__header">
                    <h2 className="p-modal__title sponsor-title" id={`modal-${props.level}-${props.level}-title`}>
                        <span>{m["sponsor_about"]()}</span>
                        {props.prevSponsored &&
                            <span className="p-chip " aria-label={`Sponsored ${props.prevSponsored} times`}>
                                {m["sponsor_prev"]({ count: props.prevSponsored })}
                            </span>
                        }
                    </h2>
                    <button className="p-modal__close" aria-label="Close active modal" aria-controls="modal" onClick={closeHandler}>Close</button>
                </header>
                <div className="p-logo-section__items">
                    <img src={
                        theme === "dark" && props.invertedLogo 
                            ? props.invertedLogo
                            : props.logoImageSrc
                        } alt={props.name} loading="lazy" decoding="async" 
                        style={{ maxHeight: "10rem", minHeight: "1rem" }} className="p-logo-section__logo"
                    />
                </div>
                <h1>{props.name}</h1>
                <b>{props.level}</b>
                <Markdown>
                    {props.description}
                </Markdown>
                <footer className="p-modal__footer">
                <a href={props.url} target="_blank"><button className="p-button--positive u-no-margin--bottom">{m["visit_website"]()}</button></a>
                </footer>
            </section>
            </div>
        </>
    )
}
