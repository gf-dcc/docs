---
sidebar_position: 6
---

# cBioPortal

This is the workflow for submitting data into cBioPortal for sharing and visualization. 
The steps for contribution are [detailed here](https://github.com/cBioPortal/datahub/blob/master/docs/curation-process.md).

```mermaid

flowchart TB

    classDef Sage fill:#1A7DBB,color:white,stroke:#333,stroke-width:2px;
    classDef MSKCC fill:lightgray,stroke:#333,stroke-width:2px;
    classDef Contributor fill:#E6F7E7,color:green,stroke:#333,stroke-width:2px;
    classDef Decision fill:white,stroke:#333,stroke-width:2px;

    communicate["CONTRIBUTOR: Communicates about in-progress data to SAGE"]:::Contributor --> checkDataType["SAGE: Tracks data types and confirms potential for cBioPortal"]:::Sage
    checkDataType --> potentialDev["MSKCC: Informed and works on new features for incoming data as needed"]:::MSKCC
    communicate --> uploadsData:::Contributor
    uploadsData["CONTRIBUTOR: Uploads data to Synapse"] --> annotatesDCA["CONTRIBUTOR: Annotates data files using Data Curator App (DCA)"]:::Contributor
    annotatesDCA --> reviewData["SAGE: Reviews data/metadata for completeness <br>and correctness with Gray Foundation data model"]:::Sage
    reviewData --> reviewResult["CONTRIBUTOR: Receives confirmation of data completeness<br>or receives requests for additional data or corrections"]:::Contributor
    reviewResult --> decidePrep1
    decidePrep1{{"Does the contributor have the expertise and resources to independently manage and prepare data submissions for cBioPortal, or is intervention from Sage required to facilitate this process?"}}:::Decision
    reviewResult -.-> uploadsData
    reviewResult -.-> annotatesDCA
    decidePrep1 -->|yes| directSubmissionProcess["CONTRIBUTOR: Works directly with MSKCC on<br>submission process of data to cBioPortal"]:::Contributor
    decidePrep1 -->|no| fallbackToSage["SAGE: Handles preparation of<br>data to be submitted to cBioPortal"]:::Sage
    directSubmissionProcess --> uploadscBioData["SAGE/CONTRIBUTOR: Add or update cBioPortal dataset in Synapse"]
    fallbackToSage --> uploadscBioData:::Sage
    uploadscBioData --> validated["SAGE: Validates dataset and hands off to MSKCC Team"]:::Sage
    validated --> loadData["MSKCC: Loads data to cBioPortal private instance to be accessible in phase 2 (data can be viewed by consortium)"]:::MSKCC
    loadData --> informContributor["MSKCC: Informs the Contributor about loaded/updated dataset and provides access for review"]:::MSKCC
    informContributor --> contributorReviews["CONTRIBUTOR: Reviews and corrects data as needed"]:::Contributor -.-> uploadscBioData
    informContributor --> updateGFPortal["MSKCC: Updates GF Data Portal with accession to share with funders/other teams"]:::MSKCC
    updateGFPortal --> moveToPhaseIII["CONTRIBUTOR: Confirms moving to data to <br> phase 3 (data can be viewed by public)"]:::Contributor
    moveToPhaseIII --> copiesDataPublic["MSKCC: Makes data available in public cBioPortal"]:::MSKCC

```
