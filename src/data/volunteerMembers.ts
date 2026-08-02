import type { TranslationKey } from "../i18n/utils.ts";

type VolunteerMember = {
    name: string;
    role: TranslationKey[];
};

export const volunteerMembers: VolunteerMember[] = [
    {
        name: "최연우",
        role: [
            "role_moderator",
        ],
    },
    {
        name: "김영웅",
        role: [
            "role_moderator",
        ]
    },
    {
        name: "강예림",
        role: [
            "role_photo_interview",
        ]
    },
    {
        name: "황한문",
        role: [
            "role_speaker_info"
        ]
    },
    {
        name: "윤주호",
        role: [
            "role_reception",
            "role_venue_safety"
        ]
    },
    {
        name: "정승민",
        role: [
            "role_reception",
            "role_venue_safety"
        ]
    },
    {
        name: "조준민",
        role: [
            "role_venue_info",
            "role_venue_safety",
            "role_photo_interview"
        ]
    },
    {
        name: "김민주",
        role: [
            "role_venue_info",
            "role_venue_safety",
            "role_photo_interview"
        ]
    },
    {
        name: "문선우",
        role: [
            "role_venue_safety"
        ]
    }
]
