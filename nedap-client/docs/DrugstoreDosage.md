# NedapOnsApi.DrugstoreDosage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | Textual description of the complete dosage instructions. This includes the doseAndRate, and all additionalInstructions and patientInstructions. | [optional] 
**doseAndRate** | **String** | Textual description of the amount and frequency of administration. | [optional] 
**additionalInstructions** | [**[CodeableConcept]**](CodeableConcept.md) | Coded instructions and warnings about how to take the medication. | [optional] 
**patientInstructions** | **[String]** | Free-text supplemental instructions and warnings about how to take the medication. | [optional] 
**route** | [**CodeableConcept**](CodeableConcept.md) |  | [optional] 
**asNeeded** | **Boolean** | As needed means that the dose is only to be administered under certain conditions. The condition for administering medication can be: - a physiological measurement value (plasma glucose concentration, body temperature, blood pressure); - a symptom or other circumstance (in the event of a headache, or itch). | [optional] 
**moments** | **[String]** | Please use &#x27;scheduled_administrations&#x27; instead. | [optional] 
**scheduledAdministrations** | [**[DrugstoreScheduledAdministration]**](DrugstoreScheduledAdministration.md) | A list of ScheduledAdministrations | [optional] 
