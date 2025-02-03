"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7115],{3283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var s=t(4848),o=t(8453);const i={},r="Azure DevOps",a={id:"using_rf_in_ci_systems/ci/azure-devops",title:"Azure DevOps",description:"Azure DevOps is a Microsoft platform that provides an end-to-end DevOps toolchain for developing and deploying software. It integrates with most leading tools on the market and is a great option for orchestrating a CI/CD pipeline.",source:"@site/docs/using_rf_in_ci_systems/ci/azure-devops.md",sourceDirName:"using_rf_in_ci_systems/ci",slug:"/using_rf_in_ci_systems/ci/azure-devops",permalink:"/docs/using_rf_in_ci_systems/ci/azure-devops",draft:!1,unlisted:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/using_rf_in_ci_systems/ci/azure-devops.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CI Systems",permalink:"/docs/using_rf_in_ci_systems/ci/"},next:{title:"GitHub Actions",permalink:"/docs/using_rf_in_ci_systems/ci/github-actions"}},l={},p=[{value:"Setting Up the Pipeline",id:"setting-up-the-pipeline",level:2},{value:"Example of Azure Pipelines YAML for Robot Framework",id:"example-of-azure-pipelines-yaml-for-robot-framework",level:3}];function c(e){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"azure-devops",children:"Azure DevOps"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Azure DevOps"})," is a Microsoft platform that provides an end-to-end DevOps toolchain for developing and deploying software. It integrates with most leading tools on the market and is a great option for orchestrating a CI/CD pipeline."]}),"\n",(0,s.jsxs)(n.p,{children:["To run ",(0,s.jsx)(n.strong,{children:"Robot Framework"})," tests in your Azure DevOps pipeline, you need to have ",(0,s.jsx)(n.strong,{children:"Python"})," and ",(0,s.jsx)(n.strong,{children:"Robot Framework"})," installed on the agents that execute the pipeline. You can use either Microsoft-hosted agents or set up your own self-hosted agents."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-the-pipeline",children:"Setting Up the Pipeline"}),"\n",(0,s.jsx)(n.p,{children:"In Azure DevOps, pipelines are defined using YAML files that specify the steps and jobs to be executed. Below is an example of an Azure DevOps pipeline that runs Robot Framework tests."}),"\n",(0,s.jsx)(n.h3,{id:"example-of-azure-pipelines-yaml-for-robot-framework",children:"Example of Azure Pipelines YAML for Robot Framework"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"# azure-pipelines.yml\n\ntrigger: none\npr: none\n\npool:\n  name: 'Your Agent Pool'  # Replace with your agent pool name\n\njobs:\n- job: RunRobotTests\n  displayName: 'Run Robot Framework Tests'\n  steps:\n  \n  - task: UsePythonVersion@0\n    inputs:\n      versionSpec: '3.10'  # Specify the Python version you need\n      addToPath: true\n\n  - script: |\n      python -m pip install --upgrade pip\n      pip install -r requirements.txt\n    displayName: 'Install Dependencies'\n\n  - script: |\n      echo Running Robot Framework Tests\n      robot -d Results Tests/yourPathToTests..\n    displayName: 'Run Robot Framework Tests'\n    continueOnError: true\n\n  - task: PublishBuildArtifacts@1\n    displayName: 'Publish Robot Framework Reports'\n    inputs:\n      PathtoPublish: 'Results'\n      ArtifactName: 'RobotFrameworkReports'\n      publishLocation: 'Container'\n    condition: succeededOrFailed()\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Line 6-7:"})," ",(0,s.jsx)(n.code,{children:"pool"}),": Specifies the agent pool that will run the pipeline.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Line 10:"})," ",(0,s.jsx)(n.code,{children:"job: RunRobotTests"}),": Defines a job called RunRobotTests.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Line 14-17:"})," ",(0,s.jsx)(n.code,{children:"task: UsePythonVersion@0"}),": Uses a specific version of Python on the agent.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Line 19-22:"})," Installs necessary Python packages from requirements.txt.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Line 24-28:"})," Executes the Robot Framework tests located in the specified test suite and outputs results to the Results directory.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Line 30-36:"})," Publishes the test results as build artifacts, making them available for download."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);