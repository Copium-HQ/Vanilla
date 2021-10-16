import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Protocols/Procedures',
    path: '/Protocols',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Safety-Suits',
    path: '/SuitPage',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Extra-Terrestrial Sightings',
    path: '/map',
    icon: <BsIcons.BsFillMapFill />
  },
  {
    title: 'Emergency Contact',
    path: '/EmergencyPage',
    icon: <BsIcons.BsFillExclamationTriangleFill />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Report an Alien',
    path: '/ReportPage',
    icon: <AiIcons.AiOutlineForm/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
];
