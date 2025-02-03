"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5758],{365:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(4848),i=s(8453);const r={},o="GitHub Actions",l={id:"using_rf_in_ci_systems/ci/github-actions",title:"GitHub Actions",description:"This guide explains how to set up GitHub Actions to run Robot Framework web tests in a CI/CD pipeline.",source:"@site/docs/using_rf_in_ci_systems/ci/github-actions.md",sourceDirName:"using_rf_in_ci_systems/ci",slug:"/using_rf_in_ci_systems/ci/github-actions",permalink:"/docs/using_rf_in_ci_systems/ci/github-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/using_rf_in_ci_systems/ci/github-actions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure DevOps",permalink:"/docs/using_rf_in_ci_systems/ci/azure-devops"},next:{title:"GitLab",permalink:"/docs/using_rf_in_ci_systems/ci/gitlab"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Key Concepts:",id:"key-concepts",level:3},{value:"Workflow Configuration",id:"workflow-configuration",level:2},{value:"Explanation of Workflow Steps",id:"explanation-of-workflow-steps",level:2},{value:"Triggering the Workflow",id:"triggering-the-workflow",level:2},{value:"Secrets",id:"secrets",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,t.jsx)(n.p,{children:"This guide explains how to set up GitHub Actions to run Robot Framework web tests in a CI/CD pipeline."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"GitHub Actions is a CI/CD and automation platform integrated into GitHub that allows you to define and manage your build, test, and deployment pipelines. It uses a YAML-based configuration to specify workflows, which are automated processes that are triggered by events in your GitHub repository."}),"\n",(0,t.jsx)(n.p,{children:"To set up a CI/CD pipeline with GitHub Actions, you need to create a workflow file in the .github/workflows directory of your repository. This file contains the configuration for your workflows."}),"\n",(0,t.jsx)(n.p,{children:"A workflow is a set of jobs that are executed in a specific order. Jobs are defined as steps that run commands or actions. Jobs can be grouped into different workflows, and their execution can be controlled through dependencies and conditions."}),"\n",(0,t.jsx)(n.h3,{id:"key-concepts",children:"Key Concepts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Workflows"}),": Define the automated processes and are triggered by events such as code pushes or pull requests."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Jobs"}),": A set of steps that run on the same runner. Jobs can run in parallel or sequentially based on dependencies."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Steps"}),": Individual tasks within a job. Steps can include commands, scripts, or actions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Actions"}),": Reusable components that can be used within steps to perform common tasks."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details on configuring GitHub Actions workflows, refer to the ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"workflow-configuration",children:"Workflow Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'name: Run Robot Framework Tests\n\non:\n  workflow_dispatch:\n  schedule:\n    - cron: \'0 17 * * *\'\n\njobs:\n  test:\n    runs-on: macos-latest\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v3\n\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: \'3.10\'\n\n      - name: Install dependencies\n        run: |\n          python -m pip install --upgrade pip\n          # Install additional dependencies if needed\n          pip install -r requirements.txt\n\n      - name: Run Robot Framework tests\n        env:\n          WORK_TOKEN: ${{ secrets.GIT_TOKEN }}\n          TZ: Asia/Ho_Chi_Minh\n        run: |\n          if ! robot --outputdir results --exclude skip tests/; then\n              echo "Robot Framework tests failed. Rerunning failed tests..."\n              if [ -f results/output.xml ]; then\n                  robot --rerunfailed results/output.xml --outputdir results_rerun tests/ || true\n                  if [ -f results_rerun/output.xml ]; then\n                      rebot --output results/output.xml --log results/log.html --report results/report.html --merge results/output.xml results_rerun/output.xml\n                  else\n                      echo "No output.xml file found from rerun. Skipping merge."\n                  fi\n              else\n                  echo "No output.xml file found. Cannot rerun failed tests."\n              fi\n          fi\n\n          echo "Script execution completed"\n        continue-on-error: true\n\n      - name: Upload artifact\n        uses: actions/upload-artifact@v4\n        with:\n          path: ./results\n          name: robot-test-results\n          retention-days: 3\n'})}),"\n",(0,t.jsx)(n.h2,{id:"explanation-of-workflow-steps",children:"Explanation of Workflow Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Checkout Repository"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This step uses ",(0,t.jsx)(n.code,{children:"actions/checkout"})," to check out the repository code."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Set Up Python"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This step sets up Python version 3.10 using ",(0,t.jsx)(n.code,{children:"actions/setup-python"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Install Dependencies"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Upgrades pip and installs the dependencies specified in ",(0,t.jsx)(n.code,{children:"requirements.txt"})," and a local package."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-requirements.txt",children:"requests==2.32.3\nrobotframework==4.1.3\nrobotframework-appiumlibrary==2.1.0\nrobotframework-jsonlibrary==0.5\nrobotframework-pythonlibcore==4.4.1\nrobotframework-seleniumlibrary==6.3.0\nrobotframework-tidy==4.0\nrpaframework-core==11.3.3\nrpaframework-recognition==5.2.4\nselenium==4.12\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Run Robot Framework Tests"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Executes Robot Framework tests and handles test results. If tests fail, it reruns the failed tests and merges results if necessary."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Upload Artifact"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Uses ",(0,t.jsx)(n.code,{children:"actions/upload-artifact"})," to upload test results for further analysis or archival. The results are retained for 3 days."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"triggering-the-workflow",children:"Triggering the Workflow"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Manual Trigger"}),": You can manually trigger this workflow using the GitHub Actions interface."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scheduled Trigger"}),": The workflow is also scheduled to run daily at 17:00 (UTC)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"secrets",children:"Secrets"}),"\n",(0,t.jsx)(n.p,{children:"Ensure that the following secrets are set in your GitHub repository settings for the workflow to function properly:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GIT_TOKEN"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);