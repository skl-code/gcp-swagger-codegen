# NedapOnsApi.DossierMedicalDsmFinding

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**axis** | **Number** | The axis of the finding | [optional] 
**signsOf** | **Boolean** | Whether or not there are signs of the diagnosis | [optional] 
**mainDiagnosis** | **Boolean** | Whether or it is the primary diagnosis | [optional] 
**compoundCode** | **String** | The compound code that uniquely identifies the diagnosis  For DSM-IV this is: CL_DIAGNOSE_BEGINDATUM|CL_DIAGNOSE_CODE|CL_DIAGNOSE_BRANCHE_INDICATIE  For DSM-5 this is: CL_DIAGNOSE_BEGINDATUM|CL_D5_DIAGNOSE_CODE | [optional] 
**icd9cmCode** | **String** | The ICD-9-CM code of the diagnosis | [optional] 
**dsmType** | **String** | Whether it is a DSM-IV or a DSM-V finding | [optional] 
**convertedCompoundCodeDsm4** | **String** | If it is a DSM-5 finding, this is the converted DSM-IV compound code | [optional] 
**description** | **String** | The description of the diagnosis | [optional] 
**diagnosisClaimType** | **Number** | The claim type of a diagnosis. | [optional] 
