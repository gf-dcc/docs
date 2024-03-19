---
sidebar_position: 6
---

# cBioPortal

This is the workflow for submitting data into cBioPortal for sharing and visualization. 
The steps for contribution are [detailed here](https://github.com/cBioPortal/datahub/blob/master/docs/curation-process.md).

```mermaid

flowchart TB

    classDef Sage fill:blue,color:white,stroke:#333,stroke-width:2px;
    classDef MSKCC fill:lightgray,stroke:#333,stroke-width:2px;
    classDef Contributor fill:red,color:white,stroke:#333,stroke-width:2px;
    classDef Decision fill:white,stroke:#333,stroke-width:2px;

    communicate["CONTRIBUTOR: Communicates about in-progress data to SAGE"]:::Contributor --> checkDataType["SAGE: Tracks data types and confirms potential for cBioPortal"]:::Sage
    checkDataType --> potentialDev["MSKCC: Informed and works on new features for incoming data as needed"]:::MSKCC
    communicate --> uploadsData:::Contributor
    uploadsData["CONTRIBUTOR: Uploads data to Synapse"] --> annotatesDCA["CONTRIBUTOR: Annotates using DCA"]:::Contributor
    annotatesDCA --> reviewData["SAGE: Review data/metadata for completeness <br>and correctness with Gray Foundation data model"]:::Sage
    reviewData --> reviewResult["CONTRIBUTOR: Receives OK or requests for additional data or corrections"]:::Contributor
    reviewResult --> decidePrep1
    decidePrep1{{"Is Contributor able and willing<br>to do direct contribution?"}}:::Decision
    reviewResult -.-> uploadsData
    reviewResult -.-> annotatesDCA
    decidePrep1 -->|yes| directSubmissionProcess["CONTRIBUTOR: Works directly with MSKCC on submission process"]:::Contributor
    decidePrep1 -->|no| fallbackToSage["SAGE: handles submission to MSKCC"]:::Sage
    directSubmissionProcess --> uploadscBioData["SAGE/CONTRIBUTOR: Add or update cBioPortal dataset in Synapse"]
    fallbackToSage --> uploadscBioData:::Sage
    uploadscBioData --> validated["SAGE: Validates dataset and hands off to MSKCC Team"]:::Sage
    validated --> loadData["MSKCC: Loads data to GF private instance"]:::MSKCC
    loadData --> informContributor["MSKCC: Informs the Contributor about loaded/updated dataset and provides access for review"]:::MSKCC
    informContributor --> contributorReviews["CONTRIBUTOR: Reviews and may corrects data as needed"]:::Contributor -.-> uploadscBioData
    informContributor --> updateGFPortal["MSKCC: Updates main GF Data Portal with accession to share with funders/other teams"]:::MSKCC
    updateGFPortal --> moveToPhaseIII["CONTRIBUTOR: Confirm move to Phase III release"]:::Contributor
    moveToPhaseIII --> copiesDataPublic["MSKCC: Makes data available in public MSKCC"]:::MSKCC

```
