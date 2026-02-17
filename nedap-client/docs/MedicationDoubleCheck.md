# NedapOnsApi.MedicationDoubleCheck

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | Unique ID for the double check. | [optional] 
**clientId** | **Number** | Client who will receive the medication. | [optional] 
**medicationChartDate** | **Date** | Calendar day on which the medication should be taken formatted as YYYY-MM-DD. This date is assumed to be in the time zone of the client. | [optional] 
**administrationMoment** | **String** | The moment at which the medication was planned (e.g. &#x27;08:00&#x27;). Note that this specifically does not model a time object because the time is considered to be relative to the client&#x27;s current timezone. In general it should be presented without interpretation. | [optional] 
**quantityToAdminister** | **String** | In some cases, a user administering medication may want to include the quantity they are proposing to administer.  Numerical value (with implicit precision) The precision is implied from the value, so &#x27;0.10&#x27; is different from &#x27;0.1&#x27; &#x27;.&#x27; is used as the expected decimal separator  Optional. | [optional] 
**administrationAgreement** | [**DrugstoreAdministrationAgreement**](DrugstoreAdministrationAgreement.md) |  | [optional] 
**createdAt** | **Date** | Describes when the request for this DoubleCheck was started | [optional] 
**decision** | **String** | Most recent decision made by a checker about this double check. Valid values are:  - pending: Same as blank, double check is still being performed. - cancelled: Sender cancelled the double check - rejected: Checker rejected the double check because there is not enough information (see decisionReason for details). - stopped: Checker stopped administration because the double check is prepared incorrectly. - timeout: Service failed to find checker in a timely manner. - verified: Checker verified that the medication was correctly prepared.  Note that this value may change over time when new changes come in. | [optional] 
**decisionAt** | **Date** | Time at which the decision was last changed; this may change over time. | [optional] 
