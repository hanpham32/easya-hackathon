"use client"

import SectionHeader from "@/components/SectionHeader";
import Sidebar from "@/components/SideBar";
import ContentDetailWorkshop from "@/components/ContentDetailWorkshop";

const DetailWorkshop = () => {

    // get title for the url path

    return (
        <section>
            <SectionHeader title={'Workshop Description'} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus." />
            <Sidebar />
            <ContentDetailWorkshop />
        </section>
    );

}

export default DetailWorkshop;