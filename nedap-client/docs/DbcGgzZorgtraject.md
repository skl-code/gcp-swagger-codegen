# NedapOnsApi.DbcGgzZorgtraject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Object identifier | [optional] 
**externalId** | **Number** | Identifier of care order | [optional] 
**beschikkingExternalId** | **Number** | Only used for jeugd zorgtrajecten. Object identifier for the beschikking. | [optional] 
**clientId** | **Number** | The object identifier of the Client. | 
**verwijzingId** | **Number** | Unused | [optional] 
**jeugd** | **Boolean** | Whether this Zorgtraject concerns a jeugd (youth) traject. New Zorgtrajecten may not set this to true. | [optional] 
**privacyBezwaar** | **Boolean** | Whether the client has signed a document which says for privacy reasons the client data may not be exposed to external parties. | [optional] 
**identificatienummer** | **String** | Filled automatically with a random identifier if left empty. | [optional] 
**begindatum** | **Date** | Start date | 
**einddatum** | **Date** | End date. Set automatically based on the state of the DBCs (Subtraject) contained in this zorgtraject. If this value is null, the Zorgtraject is open. If non-null, it is closed. | [optional] 
**soortVerwijzer** | [**DbcGgzSoortVerwijzer**](DbcGgzSoortVerwijzer.md) |  | [optional] 
**verwijzerAgb** | **String** | Verwijzer moved to subtraject | [optional] 
**zorgdomein** | [**DbcGgzZorgdomein**](DbcGgzZorgdomein.md) |  | [optional] 
**uitvoerendeInstellingAgb** | **String** | Unused | [optional] 
**primaireDiagnose** | [**DbcGgzDiagnoseToekenning**](DbcGgzDiagnoseToekenning.md) |  | [optional] 
**subtrajecten** | [**[DbcGgzSubtraject]**](DbcGgzSubtraject.md) | Subtrajecten (DBCs or DBBCs) contained in this Zorgtraject. | [optional] 
**fzSubtrajecten** | [**[DbcGgzFzSubtraject]**](DbcGgzFzSubtraject.md) | Fz-Subtrajecten (DBBCs) contained in this Zorgtraject. | [optional] 
