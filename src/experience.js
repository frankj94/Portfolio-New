import React from "react";

import Job from "./components/job";
import Resume from "./components/resume";
import Work from "./components/work";

function Experience() {
    return (
        <div class="experience-top">
        <Job />
            <Resume />
            <Work/>
        </div>
    )
}

export default Experience