export type Skill = {
  title: string;
  items: string[];
}

export const skills = {
  es: [
    {
      title: "Lenguajes de Programación",
      items: [
        "PHP",
        "Java",
        "C#",
        "NodeJS / JavaScript",
        "ReactJS",
        "React Native",
        "HTML5",
        "CSS",
        "Python",
      ],
    },
    {
      title: "Bases de Datos",
      items: ["MongoDB", "MariaDB", "SQL", "MySQL"],
    },
    {
      title: "Virtualización",
      items: ["VMWare", "Hyper-V", "VirtualBox"],
    },
    {
      title: "Routing, Switching y Seguridad",
      full: true,
      items: [
        "Configuración de Router Cisco",
        "Configuración de Switch Cisco",
        "Configuración de Switch Huawei",
        "Configuración de Firewall Fortinet",
        "Protocolos RIP, RIP v2, IGRP, EIGRP, OSPF",
        "Configuración de VLAN",
        "NAT",
        "DHCP",
        "DNS",
        "VPN",
        "IPSEC",
        "SD-WAN",
        "VOIP",
        "CCTV",
        "Cableado estructurado",
      ],
    },
    {
      title: "Software",
      full: true,
      items: [
        "CONTPAQi (Contabilidad, Bancos, Comercial, Nóminas)",
        "Microsoft Office (Excel, Word, PowerPoint, Outlook)",
        "CRM Vtiger",
        "ERP (SAP, Cirrus, Odoo)",
        "Android Studio",
        "Visual Studio Code",
        "Visual Studio",
      ],
    },
    {
      title: "Soporte Técnico",
      items: [
        "Mantenimiento de equipo de cómputo",
        "Reparación de equipo de cómputo",
        "Instalación de aplicativos",
        "Actualizaciones de software",
      ],
    },
    {
      title: "Sistemas Operativos",
      items: ["Windows", "Linux", "Android", "iOS"],
    },
  ],
  en: [
    {
      title: "Programming Languages",
      items: [
        "PHP",
        "Java",
        "C#",
        "Node.js / JavaScript",
        "React.js",
        "React Native",
        "HTML5",
        "CSS",
        "Python",
      ],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MariaDB", "SQL", "MySQL"],
    },
    {
      title: "Virtualization",
      items: ["VMware", "Hyper-V", "VirtualBox"],
    },
    {
      title: "Routing, Switching, and Security",
      full: true,
      items: [
        "Cisco Router Configuration",
        "Cisco Switch Configuration",
        "Huawei Switch Configuration",
        "Fortinet Firewall Configuration",
        "Routing Protocols: RIP, RIP v2, IGRP, EIGRP, OSPF",
        "VLAN Configuration",
        "NAT",
        "DHCP",
        "DNS",
        "VPN",
        "IPsec",
        "SD-WAN",
        "VoIP",
        "CCTV",
        "Structured Cabling",
      ],
    },
    {
      title: "Software",
      full: true,
      items: [
        "CONTPAQi (Accounting, Banking, Commercial, Payroll)",
        "Microsoft Office (Excel, Word, PowerPoint, Outlook)",
        "Vtiger CRM",
        "ERP Systems (SAP, Cirrus, Odoo)",
        "Android Studio",
        "Visual Studio Code",
        "Visual Studio",
      ],
    },
    {
      title: "Technical Support",
      items: [
        "Computer Equipment Maintenance",
        "Computer Equipment Repair",
        "Application Installation",
        "Software Updates",
      ],
    },
    {
      title: "Operating Systems",
      items: ["Windows", "Linux", "Android", "iOS"],
    },
  ],
};
