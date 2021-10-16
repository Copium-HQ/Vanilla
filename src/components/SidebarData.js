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
    title: 'Protocols',
    path: '/Protocols',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Suits',
    path: '/SuitPage',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Map',
    path: '/Team',
    icon: <BsIcons.BsFillMapFill />
  },
  {
    title: 'Emergency',
    path: '/EmergencyPage',
    icon: <BsIcons.BsFillExclamationTriangleFill />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Report',
    path: '/ReportPage',
    icon: <AiIcons.AiOutlineForm/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
];
