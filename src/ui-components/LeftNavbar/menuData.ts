import { FaTwitter } from "react-icons/fa";
import { AiFillHome } from 'react-icons/ai'
import { BsSearch, BsPencilSquare } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import {MdOutlineAccountCircle} from 'react-icons/md'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'

export enum IconVariantEnum {
    home = "home",
    logo = "logo",
    other = "other",
    search = "search",
    compose = "compose",
    profile = "profile",
    messages = "messages",
    notifications = "notifications",
}

export type MenuItemType = {
    icon: IconVariantEnum;
    pageBaseURL: string;
    hasDefaultStyle: boolean;
    tooltipText: string;
}

export const IconVariantToComponent = {
    [IconVariantEnum.logo]: FaTwitter,
    [IconVariantEnum.search]: BsSearch,
    [IconVariantEnum.home]: AiFillHome,
    [IconVariantEnum.messages]: AiOutlineMail,
    [IconVariantEnum.notifications]: BiBell,
    [IconVariantEnum.profile]: MdOutlineAccountCircle,
    [IconVariantEnum.other]: HiOutlineDotsCircleHorizontal,
    [IconVariantEnum.compose]: BsPencilSquare
}


export const leftBarData: Array<MenuItemType> = [
    {
        icon: IconVariantEnum.logo,
        pageBaseURL: "/",
        hasDefaultStyle: false,
        tooltipText: "Twitter"
    },
    {
        icon: IconVariantEnum.home,
        pageBaseURL: "/home",
        hasDefaultStyle: true,
        tooltipText: "Home"
    },
    {
        icon: IconVariantEnum.search,
        pageBaseURL: "/search",
        hasDefaultStyle: true,
        tooltipText: "Search"
    },
    {
        icon: IconVariantEnum.notifications,
        pageBaseURL: "/notifications",
        hasDefaultStyle: true,
        tooltipText: "Notifications"
    },
    {
        icon: IconVariantEnum.messages,
        pageBaseURL: "/messages",
        hasDefaultStyle: true,
        tooltipText: "Messages"
    },
    {
        icon: IconVariantEnum.profile,
        pageBaseURL: "/profile",
        hasDefaultStyle: true,
        tooltipText: "Profile"
    },   
    {
        icon: IconVariantEnum.other,
        pageBaseURL: "mini-modal with options",
        hasDefaultStyle: true,
        tooltipText: "Other"
    },
    {
        icon: IconVariantEnum.compose,
        pageBaseURL: "modal of tweet",
        hasDefaultStyle: false,
        tooltipText: "Tweet"
    }
]