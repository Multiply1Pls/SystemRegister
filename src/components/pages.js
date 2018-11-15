import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
    Authorities, DataDictionary, ERDiagram, Normalized, RelationSchema,
    Fact_FindingTechnics, SystemRequirementSpecification, Home, InputDesign,
    OutputDesign, FeasibilityStudy, Fishbone, ProjectSchedule,
    SystemRequest, SystemScopeDocument, ContextDiagram, DFDDiagram,
    ProcessDescription, ProcessingDescription, DataModel, DemandAnalysis,
    ProblemDetermination, ProcessModeling
} from '../doc'



export const Pages = () => (
    <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/SystemRegister/" component={Home} />

        <Route path="/SystemRegister/Authorities" component={Authorities} />

        <Route path="/SystemRegister/ProblemDetermination" component={ProblemDetermination} />
        <Route path="/SystemRegister/SystemRequest" component={SystemRequest} />
        <Route path="/SystemRegister/Fishbone" component={Fishbone} />
        <Route path="/SystemRegister/SystemScopeDocument" component={SystemScopeDocument} />
        <Route path="/SystemRegister/ProjectSchedule" component={ProjectSchedule} />
        <Route path="/SystemRegister/FeasibilityStudy" component={FeasibilityStudy} />

        <Route path="/SystemRegister/DemandAnalysis" component={DemandAnalysis} />
        <Route path="/SystemRegister/SystemRequirementSpecification" component={SystemRequirementSpecification} />
        <Route path="/SystemRegister/Fact-FindingTechnics" component={Fact_FindingTechnics} />

        <Route path="/SystemRegister/ProcessModeling" component={ProcessModeling} />
        <Route path="/SystemRegister/ContextDiagram" component={ContextDiagram} />
        <Route path="/SystemRegister/DFDDiagram" component={DFDDiagram} />
        <Route path="/SystemRegister/ProcessDescription" component={ProcessDescription} />
        <Route path="/SystemRegister/ProcessingDescription" component={ProcessingDescription} />

        <Route path="/SystemRegister/DataModel" component={DataModel} />
        <Route path="/SystemRegister/ERDiagram" component={ERDiagram} />
        <Route path="/SystemRegister/DataDictionary" component={DataDictionary} />
        <Route path="/SystemRegister/RelationSchema" component={RelationSchema} />
        <Route path="/SystemRegister/Normalized" component={Normalized} />

        <Route path="/SystemRegister/OutputDesign" component={OutputDesign} />

        <Route path="/SystemRegister/InputDesign" component={InputDesign} />
    </Switch>

)


