import { volunteerMembers } from "@data/volunteerMembers.ts";
import { useTranslations, type Locale, type TranslationKey } from "../i18n/utils.ts";
import { useState} from "react";
import { baseLocale, extractLocaleFromUrl } from "../paraglide/runtime";

export default function VolunteerMembers() {
    const currentLocale: Locale = typeof window !== "undefined"
        ? extractLocaleFromUrl(new URL(window.location.href)) ?? baseLocale
        : baseLocale;
    const m = useTranslations(currentLocale);
    const getMemberRoles = (memberRoles: TranslationKey[]) => memberRoles.map((role) => m(role));

    const [memberList, setMemberList] = useState(volunteerMembers);

    function searchMember(keyword: string) {
        setMemberList(volunteerMembers.filter((member) =>
            member.name.includes(keyword) ||
            getMemberRoles(member.role).join().includes(keyword)
        ));
    }

    function resetMember() {
        setMemberList(volunteerMembers);
    }

    return (
        <section className="grid-col-8">
        <form className="p-search-box u-no-print" onSubmit={(e) => {e.preventDefault()}}>
            <label className="u-off-screen" htmlFor="search">{m("role_search")}</label>
            <input type="search" id="search" className="p-search-box__input" name="search" placeholder={m("role_search")} autoComplete="on" onChange={(e) => searchMember(e.currentTarget.value)} />
            <button type="reset" className="p-search-box__reset" onClick={resetMember}><i className="p-icon--close">{m("role_close")}</i></button>
            <button type="submit" className="p-search-box__button"><i className="p-icon--search">{m("role_search")}</i></button>
        </form>

        <ul className="grid-row">
            {memberList.map((member, idx) => (
                <li className="grid-col-2" key={idx}>
                    <div className="p-media-object--large">
                        <div className="p-media-object__details">
                            <h4 className="u-no-padding--top" style={{ marginBottom: "0.1rem" }}>{member.name}</h4>
                            <p className="p-media-object__content">
                                {member.team}
                            </p>
                            <p className="p-media-object__content">
                                {member.role.map((role, idx) => (
                                    <span className={`u-no-margin--bottom ${idx === 0 ? "p-chip--information" : "p-chip"}`} key={idx}>
                                        {m(role)}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </section>
    )
}
