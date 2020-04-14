# Contributing Guidelines

Thank you for your interest in contributing to **DXC Assure Digital Platform**. Whether it's a new feature request, a question, a bug report, or additional documentation, we greatly value feedback and contributions from our internal community.

These contribution guidelines are the main entry point for those **Assure teams** who wish to contribute to this platform component. Please read through this document before submitting any issues or pull requests to ensure we have all the necessary information to effectively respond to your contribution.

## Branching Strategy

We follow a **trunk-based development** approach for every platform-related GitHub repository. This means that _master_ branch is always at a releseable state with the latest changes. In other words, this branch contains a _release candidate_ version of the code that is picked up automatically by the Pull Pipeline and promoted through the Assure Platform Lifecycle Environments (DEV-TEST-STAGE-PROD) upon testing (aka the CI/CD process)

For that matter, it is important that every contributor (external or internal) follow the branching guidelines. 

1. If you are an external contributor (outside the DIaaS GitHub organization) then fork this repository and work there
2. If you are an internal contributor (inside the DIaaS organization) then create a branch out of _master_

    - For feature branches use the naming convention **feature/X** where _X_ is any given name for the feature (i.e. the JIRA User Story ID)
    - For bug fix branches use the naming convention **fix/X** where _X_ is any given name for the bug fix (i.e. the JIRA Bug ID )
    - For any other R&D type of work, just use free format names for branches (i.e. _myChanges_)

>**Note 1:** Release branches will be created automatically by the Release Service following the naming convention **release/X** wher _X_ is the release name (i.e. _release/20.1_)

>**Note 2:** it is very important to highlight some conventions with important implications for **Deploy Unit projects**:
>- Only _master, feature and fix_ branches will generate Silver Images during the Deploy Unit push pipelines
>- When working with _feature or fix_ branches, it is important that you synchronize the [Assure Terraform Modules](https://github.dxc.com/DIaaS/diaas-terraform-modules) repository branches with the Deploy Unit branches if necessary. This is, **if your feature requires changes both to the Deploy Unit and the Terraform Modules** then the _feature_ branch name must be created in both repositories with the exact same name. If the branch name does not match, the _master_ version of the Assure Terraform Modules will be taken.


## Giving Feedback via GitHub Issues

Feedback via issues are the primary way of communicating with the platform engineering team. Before opening an issue, please make ensure that:

1. You have checked the open and closed issues for this repository. We value your time, but ours also. Please make sure that nobody has submitted this question before
2. You have explored all the alternatives by reading the pertinent documentation resources at Assure Platform's [DocHub](https://github.dxc.com/pages/DIaaS/doc-hub/) and [Knowledge Library](https://dxcportal.sharepoint.com/sites/digitalInsurancePlatformEngineeringKnowledgeShareLibrary/SitePages/Home.aspx)
3. You are in the right repository. Assure Digital Platform is a large solution built up from multiple components. If you need further information about the platform's repository structure [please read this documentation](https://github.dxc.com/DIaaS/diaas-platform) first

### Creating the Issue

Just go to the Issues section of this repostory and click on the **New Issue** button. Make sure you select the appropriate template to submit your issue. We have prepared a few templates for you to give us feedback with regards new features, bug reports, support requests and general questions.

Remember that if your Issue request does not fit the templates above, you can alwyas open a **General Issue** following the link right under the issue templates

## Contributing via GitHub Pull Requests

Contributions via pull requests are the primary way to let the different Assure teams contribute to the platform components . Before sending us a pull request, please ensure that:

1. You are working against the latest source on the **proper** branch. We follow a trunk-based development strategy

    - If you are working on new feature, work against _master branch_
    - If you are working on a production hotfix, work against _release branch_

2. You check existing open, and recently merged, pull requests to make sure someone else hasn't worked on that already
3. You open an issue to discuss any significant work - we would hate for your time to be wasted

### Creating the Pull Request

To send us a pull request, please:

1. Fork this repository. Or, if you are a member of the DIaaS GitHub organization, clone it and then create a branch
2. Modify the source and focus on the specific change you are contributing. If you also reformat all the code, it will be hard for us to focus on your change
3. Commit to your fork or copy using clear commit messages
4. Send us a pull request to the **proper** branch as per instructions above, answering any default questions in the pull request interface
5. Select specific reviwers from the Core Team if you know them

After your PR is approved and merged, **your changes will be inmediately available in master branch**

## Security issue notifications

If you discover a potential security issue in this project we ask that you notify the repo owner urgently via email after opening the proper GitHub issue.

## About DXC Assure

DXC Assure is a digitally enabled, end-to-end SaaS offering that provides business services supporting the entire insurance industry. It is cloud native at is core, API enabled, configurable and highly automated leveraging DXC Bionix™ capabilities. DXC’s insurance industry is on a journey to evolve our software business in alignment with this vision. The DXC Assure Digital Platform plays a fundamental role in this transformation and provides the digital means for the different insurance business services at DXC to realize this strategy. Using DXC Assure Digital Platform’s integration, security and automation capabilities, DXC’s insurance core systems will provide digitally-enabled functionalities to different personae

## About DXC Assure Digital Platform

Highlevel, DXC Assure Digital Platform architecture includes the following capabilities:

- **Rapid Deployment**: Customers can be onboarded and having a working environments in hours (not days, weeks or months) thanks to the automation and orchestration capabilities leveraging DXC Bionix technology
- **Inherently Secure**: The DXC Assure Platform core infrastructure is designed from the ground up to be secure. Using Platform DXC (PDXC) scripting approach we can ensure that every environment we stand up is certified for security and compliance in any geographic region
- **Inherently available and resilent**: DXC Assure Digital Platform environments leverage automatic auto-escaling and high availablity capabilities provided by the cloud managed services. Also, platform instances for our customers are deployed in multiple availability zones and even in multiple regions
- **A la Carte business service provisioning**: Using different Catalog Item requests we can deploy just the business services the customer wants or needs on their private DXC Assure Digital Platform environment
- **Full monitoring**: For every component on the DXC Assure Digital Platform and the services running on it combining different DXC offerings such as PDXC Intelligence services, DXC iSecOps and ServiceNow
- **IT Operations Management**: With DXC Global Hub and Operations teams (GHOP) DXC provides the whole spectrum of ITIL and Servie Management processes, including customer self-service and automated alerts coming from the DXC Assure Digital Platform and services.
- **Build and Release Automation**: Push and pull updates for the DXC Assure Platform Core and Business Services - keeps all customers on the most up-to-date version of the DXC Assure Digital Platform
- **Conversational-style REST APIs**: Business services provided through the platform expose data and interactions using hypermedia-based, Level 3 REST APIs. Some of these APIs are available at DXC Developer Central, our solution to co-innovate with partners to expand DXC Insurance Digital Ecosystem
