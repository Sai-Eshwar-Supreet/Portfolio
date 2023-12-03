import myResume from '../../assets/pdfs/Resume.pdf';

export default function ResumeDownload(){
    window.open(myResume,"_blank")
    window.open("/Portfolio","_self");
    return (
        <>Downloading.....</>
    );
}
