import { useState } from 'react';
import Card from './components/Card';
import FilterSection from './components/FilterSection';

interface CardType {
    id: string;
    position: string;
    period: string;
    type: string;
    education: string;
    department: string;
    skill: string[];
    createdAt: string;
}

const applications: CardType[] = [
    {
        id: 'Dev001',
        position: 'Developer',
        period: '25 เม.ย. 2568 - 25 ก.ค. 2568',
        type: 'part time',
        education: 'ปริญญาตรี',
        department: 'วิศวะกรรมคอมพิวเตอร์',
        skill: ['python', 'Java', 'HTML', 'CSS'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev002',
        position: 'Frontend Developer',
        period: '1 มิ.ย. 2568 - 1 ก.ย. 2568',
        type: 'internship',
        education: 'ปริญญาตรี',
        department: 'เทคโนโลยีสารสนเทศ',
        skill: ['React', 'JavaScript', 'CSS'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev003',
        position: 'Backend Developer',
        period: '15 พ.ค. 2568 - 15 ส.ค. 2568',
        type: 'full time',
        education: 'ปริญญาตรี',
        department: 'วิทยาการคอมพิวเตอร์',
        skill: ['Node.js', 'Express', 'MongoDB'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev004',
        position: 'Mobile Developer',
        period: '10 ก.ค. 2568 - 10 ต.ค. 2568',
        type: 'part time',
        education: 'ปริญญาตรี',
        department: 'วิศวกรรมซอฟต์แวร์',
        skill: ['Flutter', 'Dart'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev005',
        position: 'Data Analyst',
        period: '1 ส.ค. 2568 - 1 พ.ย. 2568',
        type: 'internship',
        education: 'ปริญญาโท',
        department: 'สถิติ',
        skill: ['Python', 'Excel', 'SQL'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev006',
        position: 'AI Engineer',
        period: '5 มิ.ย. 2568 - 5 ก.ย. 2568',
        type: 'full time',
        education: 'ปริญญาโท',
        department: 'วิศวกรรมคอมพิวเตอร์',
        skill: ['Python', 'TensorFlow', 'Keras'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev007',
        position: 'UI/UX Designer',
        period: '15 ก.ค. 2568 - 15 ต.ค. 2568',
        type: 'part time',
        education: 'ปริญญาตรี',
        department: 'ศิลปกรรม',
        skill: ['Figma', 'Adobe XD'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev008',
        position: 'QA Engineer',
        period: '20 เม.ย. 2568 - 20 ก.ค. 2568',
        type: 'internship',
        education: 'ปริญญาตรี',
        department: 'วิศวกรรมซอฟต์แวร์',
        skill: ['Selenium', 'JMeter'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev009',
        position: 'DevOps Engineer',
        period: '1 พ.ค. 2568 - 1 ส.ค. 2568',
        type: 'full time',
        education: 'ปริญญาตรี',
        department: 'วิศวกรรมคอมพิวเตอร์',
        skill: ['Docker', 'Kubernetes', 'AWS'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev010',
        position: 'System Analyst',
        period: '10 มิ.ย. 2568 - 10 ก.ย. 2568',
        type: 'part time',
        education: 'ปริญญาโท',
        department: 'เทคโนโลยีสารสนเทศ',
        skill: ['UML', 'SQL', 'Communication'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev011',
        position: 'Full Stack Developer',
        period: '1 ก.ค. 2568 - 1 ต.ค. 2568',
        type: 'full time',
        education: 'ปริญญาตรี',
        department: 'วิทยาการคอมพิวเตอร์',
        skill: ['React', 'Node.js', 'MongoDB'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev012',
        position: 'Game Developer',
        period: '25 เม.ย. 2568 - 25 ก.ค. 2568',
        type: 'internship',
        education: 'ปริญญาตรี',
        department: 'วิศวกรรมซอฟต์แวร์',
        skill: ['Unity', 'C#', 'Blender'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev013',
        position: 'Security Engineer',
        period: '1 มิ.ย. 2568 - 1 ก.ย. 2568',
        type: 'part time',
        education: 'ปริญญาโท',
        department: 'ความมั่นคงไซเบอร์',
        skill: ['Penetration Testing', 'Wireshark'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev014',
        position: 'Cloud Engineer',
        period: '15 พ.ค. 2568 - 15 ส.ค. 2568',
        type: 'full time',
        education: 'ปริญญาตรี',
        department: 'เทคโนโลยีสารสนเทศ',
        skill: ['AWS', 'Azure', 'GCP'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev015',
        position: 'Technical Writer',
        period: '10 ก.ค. 2568 - 10 ต.ค. 2568',
        type: 'internship',
        education: 'ปริญญาตรี',
        department: 'อักษรศาสตร์',
        skill: ['Markdown', 'Git', 'Technical English'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev016',
        position: 'Database Administrator',
        period: '1 ส.ค. 2568 - 1 พ.ย. 2568',
        type: 'full time',
        education: 'ปริญญาโท',
        department: 'ระบบสารสนเทศ',
        skill: ['MySQL', 'PostgreSQL', 'Backup'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev017',
        position: 'IT Support',
        period: '5 มิ.ย. 2568 - 5 ก.ย. 2568',
        type: 'part time',
        education: 'ปวส.',
        department: 'คอมพิวเตอร์ธุรกิจ',
        skill: ['Hardware', 'Troubleshooting', 'Networking'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev018',
        position: 'Blockchain Developer',
        period: '15 ก.ค. 2568 - 15 ต.ค. 2568',
        type: 'internship',
        education: 'ปริญญาโท',
        department: 'วิศวกรรมซอฟต์แวร์',
        skill: ['Solidity', 'Web3.js', 'Ethereum'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev019',
        position: 'Machine Learning Engineer',
        period: '20 เม.ย. 2568 - 20 ก.ค. 2568',
        type: 'full time',
        education: 'ปริญญาเอก',
        department: 'วิทยาศาสตร์ข้อมูล',
        skill: ['scikit-learn', 'pandas', 'NumPy'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev020',
        position: 'Scrum Master',
        period: '1 พ.ค. 2568 - 1 ส.ค. 2568',
        type: 'part time',
        education: 'ปริญญาโท',
        department: 'การจัดการเทคโนโลยี',
        skill: ['Agile', 'Jira', 'Facilitation'],
        createdAt: '10 นาทีผ่านไป',
    },
    {
        id: 'Dev021',
        position: 'Network Engineer',
        period: '10 มิ.ย. 2568 - 10 ก.ย. 2568',
        type: 'full time',
        education: 'ปริญญาตรี',
        department: 'วิศวกรรมโทรคมนาคม',
        skill: ['Cisco', 'Routing', 'Switching'],
        createdAt: '10 นาทีผ่านไป',
    },
];

function App() {
    const [showPop, setShowPop] = useState(false);

    return (
        <div className="w-full">
            <FilterSection />
            <section className="w-full p-16">
                <h1 className="text-2xl font-bold">หางาน</h1>
                <div className="mt-8 flex w-full flex-wrap items-stretch justify-center gap-8 [&>div:nth-child(3n+1)_.third]:bg-black [&>div:nth-child(3n+2)_.third]:bg-orange-600 [&>div:nth-child(3n+3)_.third]:bg-blue-400">
                    {applications.map(app => (
                        <Card {...app} setShowPopup={setShowPop} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
