import { SSMClient } from "@aws-sdk/client-ssm";
import { SdkIntegrationTask } from "./asl";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput, AddTagsToResourceCommand } from "@aws-sdk/client-ssm";
import { AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm";
import { CancelCommandCommandInput, CancelCommandCommandOutput, CancelCommandCommand } from "@aws-sdk/client-ssm";
import { CancelMaintenanceWindowExecutionCommandInput, CancelMaintenanceWindowExecutionCommandOutput, CancelMaintenanceWindowExecutionCommand } from "@aws-sdk/client-ssm";
import { CreateActivationCommandInput, CreateActivationCommandOutput, CreateActivationCommand } from "@aws-sdk/client-ssm";
import { CreateAssociationCommandInput, CreateAssociationCommandOutput, CreateAssociationCommand } from "@aws-sdk/client-ssm";
import { CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput, CreateAssociationBatchCommand } from "@aws-sdk/client-ssm";
import { CreateDocumentCommandInput, CreateDocumentCommandOutput, CreateDocumentCommand } from "@aws-sdk/client-ssm";
import { CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput, CreateMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { CreateOpsItemCommandInput, CreateOpsItemCommandOutput, CreateOpsItemCommand } from "@aws-sdk/client-ssm";
import { CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput, CreateOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput, CreatePatchBaselineCommand } from "@aws-sdk/client-ssm";
import { CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput, CreateResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { DeleteActivationCommandInput, DeleteActivationCommandOutput, DeleteActivationCommand } from "@aws-sdk/client-ssm";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput, DeleteAssociationCommand } from "@aws-sdk/client-ssm";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput, DeleteDocumentCommand } from "@aws-sdk/client-ssm";
import { DeleteInventoryCommandInput, DeleteInventoryCommandOutput, DeleteInventoryCommand } from "@aws-sdk/client-ssm";
import { DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput, DeleteMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput, DeleteOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { DeleteParameterCommandInput, DeleteParameterCommandOutput, DeleteParameterCommand } from "@aws-sdk/client-ssm";
import { DeleteParametersCommandInput, DeleteParametersCommandOutput, DeleteParametersCommand } from "@aws-sdk/client-ssm";
import { DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput, DeletePatchBaselineCommand } from "@aws-sdk/client-ssm";
import { DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput, DeregisterManagedInstanceCommand } from "@aws-sdk/client-ssm";
import { DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput, DeregisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput, DeregisterTargetFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput, DeregisterTaskFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { DescribeActivationsCommandInput, DescribeActivationsCommandOutput, DescribeActivationsCommand } from "@aws-sdk/client-ssm";
import { DescribeAssociationCommandInput, DescribeAssociationCommandOutput, DescribeAssociationCommand } from "@aws-sdk/client-ssm";
import { DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput, DescribeAssociationExecutionTargetsCommand } from "@aws-sdk/client-ssm";
import { DescribeAssociationExecutionsCommandInput, DescribeAssociationExecutionsCommandOutput, DescribeAssociationExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput, DescribeAutomationExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput, DescribeAutomationStepExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput, DescribeAvailablePatchesCommand } from "@aws-sdk/client-ssm";
import { DescribeDocumentCommandInput, DescribeDocumentCommandOutput, DescribeDocumentCommand } from "@aws-sdk/client-ssm";
import { DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm";
import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput, DescribeEffectiveInstanceAssociationsCommand } from "@aws-sdk/client-ssm";
import { DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput, DescribeEffectivePatchesForPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput, DescribeInstanceAssociationsStatusCommand } from "@aws-sdk/client-ssm";
import { DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput, DescribeInstanceInformationCommand } from "@aws-sdk/client-ssm";
import { DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput, DescribeInstancePatchStatesCommand } from "@aws-sdk/client-ssm";
import { DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput, DescribeInstancePatchStatesForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput, DescribeInstancePatchesCommand } from "@aws-sdk/client-ssm";
import { DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput, DescribeInventoryDeletionsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput, DescribeMaintenanceWindowExecutionTaskInvocationsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput, DescribeMaintenanceWindowExecutionTasksCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput, DescribeMaintenanceWindowExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput, DescribeMaintenanceWindowScheduleCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput, DescribeMaintenanceWindowTargetsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput, DescribeMaintenanceWindowTasksCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput, DescribeMaintenanceWindowsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput, DescribeMaintenanceWindowsForTargetCommand } from "@aws-sdk/client-ssm";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput, DescribeOpsItemsCommand } from "@aws-sdk/client-ssm";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput, DescribeParametersCommand } from "@aws-sdk/client-ssm";
import { DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput, DescribePatchBaselinesCommand } from "@aws-sdk/client-ssm";
import { DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm";
import { DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput, DescribePatchGroupsCommand } from "@aws-sdk/client-ssm";
import { DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput, DescribePatchPropertiesCommand } from "@aws-sdk/client-ssm";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput, DescribeSessionsCommand } from "@aws-sdk/client-ssm";
import { DisassociateOpsItemRelatedItemCommandInput, DisassociateOpsItemRelatedItemCommandOutput, DisassociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm";
import { GetAutomationExecutionCommandInput, GetAutomationExecutionCommandOutput, GetAutomationExecutionCommand } from "@aws-sdk/client-ssm";
import { GetCalendarStateCommandInput, GetCalendarStateCommandOutput, GetCalendarStateCommand } from "@aws-sdk/client-ssm";
import { GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput, GetCommandInvocationCommand } from "@aws-sdk/client-ssm";
import { GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput, GetConnectionStatusCommand } from "@aws-sdk/client-ssm";
import { GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput, GetDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm";
import { GetDocumentCommandInput, GetDocumentCommandOutput, GetDocumentCommand } from "@aws-sdk/client-ssm";
import { GetInventoryCommandInput, GetInventoryCommandOutput, GetInventoryCommand } from "@aws-sdk/client-ssm";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput, GetInventorySchemaCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput, GetMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowExecutionCommandInput, GetMaintenanceWindowExecutionCommandOutput, GetMaintenanceWindowExecutionCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowExecutionTaskCommandInput, GetMaintenanceWindowExecutionTaskCommandOutput, GetMaintenanceWindowExecutionTaskCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput, GetMaintenanceWindowExecutionTaskInvocationCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput, GetMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm";
import { GetOpsItemCommandInput, GetOpsItemCommandOutput, GetOpsItemCommand } from "@aws-sdk/client-ssm";
import { GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput, GetOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput, GetOpsSummaryCommand } from "@aws-sdk/client-ssm";
import { GetParameterCommandInput, GetParameterCommandOutput, GetParameterCommand } from "@aws-sdk/client-ssm";
import { GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput, GetParameterHistoryCommand } from "@aws-sdk/client-ssm";
import { GetParametersCommandInput, GetParametersCommandOutput, GetParametersCommand } from "@aws-sdk/client-ssm";
import { GetParametersByPathCommandInput, GetParametersByPathCommandOutput, GetParametersByPathCommand } from "@aws-sdk/client-ssm";
import { GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput, GetPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput, GetPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { GetServiceSettingCommandInput, GetServiceSettingCommandOutput, GetServiceSettingCommand } from "@aws-sdk/client-ssm";
import { LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput, LabelParameterVersionCommand } from "@aws-sdk/client-ssm";
import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput, ListAssociationVersionsCommand } from "@aws-sdk/client-ssm";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput, ListAssociationsCommand } from "@aws-sdk/client-ssm";
import { ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput, ListCommandInvocationsCommand } from "@aws-sdk/client-ssm";
import { ListCommandsCommandInput, ListCommandsCommandOutput, ListCommandsCommand } from "@aws-sdk/client-ssm";
import { ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput, ListComplianceItemsCommand } from "@aws-sdk/client-ssm";
import { ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput, ListComplianceSummariesCommand } from "@aws-sdk/client-ssm";
import { ListDocumentMetadataHistoryCommandInput, ListDocumentMetadataHistoryCommandOutput, ListDocumentMetadataHistoryCommand } from "@aws-sdk/client-ssm";
import { ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput, ListDocumentVersionsCommand } from "@aws-sdk/client-ssm";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput, ListDocumentsCommand } from "@aws-sdk/client-ssm";
import { ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput, ListInventoryEntriesCommand } from "@aws-sdk/client-ssm";
import { ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput, ListOpsItemEventsCommand } from "@aws-sdk/client-ssm";
import { ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput, ListOpsItemRelatedItemsCommand } from "@aws-sdk/client-ssm";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput, ListOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput, ListResourceComplianceSummariesCommand } from "@aws-sdk/client-ssm";
import { ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput, ListResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-ssm";
import { ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm";
import { PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput, PutComplianceItemsCommand } from "@aws-sdk/client-ssm";
import { PutInventoryCommandInput, PutInventoryCommandOutput, PutInventoryCommand } from "@aws-sdk/client-ssm";
import { PutParameterCommandInput, PutParameterCommandOutput, PutParameterCommand } from "@aws-sdk/client-ssm";
import { RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput, RegisterDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput, RegisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput, RegisterTargetWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput, RegisterTaskWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput, RemoveTagsFromResourceCommand } from "@aws-sdk/client-ssm";
import { ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput, ResetServiceSettingCommand } from "@aws-sdk/client-ssm";
import { ResumeSessionCommandInput, ResumeSessionCommandOutput, ResumeSessionCommand } from "@aws-sdk/client-ssm";
import { SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput, SendAutomationSignalCommand } from "@aws-sdk/client-ssm";
import { SendCommandCommandInput, SendCommandCommandOutput, SendCommandCommand } from "@aws-sdk/client-ssm";
import { StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm";
import { StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput, StartAutomationExecutionCommand } from "@aws-sdk/client-ssm";
import { StartChangeRequestExecutionCommandInput, StartChangeRequestExecutionCommandOutput, StartChangeRequestExecutionCommand } from "@aws-sdk/client-ssm";
import { StartSessionCommandInput, StartSessionCommandOutput, StartSessionCommand } from "@aws-sdk/client-ssm";
import { StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput, StopAutomationExecutionCommand } from "@aws-sdk/client-ssm";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput, TerminateSessionCommand } from "@aws-sdk/client-ssm";
import { UnlabelParameterVersionCommandInput, UnlabelParameterVersionCommandOutput, UnlabelParameterVersionCommand } from "@aws-sdk/client-ssm";
import { UpdateAssociationCommandInput, UpdateAssociationCommandOutput, UpdateAssociationCommand } from "@aws-sdk/client-ssm";
import { UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput, UpdateAssociationStatusCommand } from "@aws-sdk/client-ssm";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput, UpdateDocumentCommand } from "@aws-sdk/client-ssm";
import { UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm";
import { UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm";
import { UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput, UpdateMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput, UpdateMaintenanceWindowTargetCommand } from "@aws-sdk/client-ssm";
import { UpdateMaintenanceWindowTaskCommandInput, UpdateMaintenanceWindowTaskCommandOutput, UpdateMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm";
import { UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput, UpdateManagedInstanceRoleCommand } from "@aws-sdk/client-ssm";
import { UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput, UpdateOpsItemCommand } from "@aws-sdk/client-ssm";
import { UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput, UpdateOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput, UpdatePatchBaselineCommand } from "@aws-sdk/client-ssm";
import { UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { UpdateServiceSettingCommandInput, UpdateServiceSettingCommandOutput, UpdateServiceSettingCommand } from "@aws-sdk/client-ssm";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:addTagsToResource'*/
export const nativeSSMAddTagsToResource = (input: SdkIntegrationTask<AddTagsToResourceCommandInput>): Promise<AddTagsToResourceCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new AddTagsToResourceCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:associateOpsItemRelatedItem'*/
export const nativeSSMAssociateOpsItemRelatedItem = (input: SdkIntegrationTask<AssociateOpsItemRelatedItemCommandInput>): Promise<AssociateOpsItemRelatedItemCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new AssociateOpsItemRelatedItemCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:cancelCommand'*/
export const nativeSSMCancelCommand = (input: SdkIntegrationTask<CancelCommandCommandInput>): Promise<CancelCommandCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CancelCommandCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:cancelMaintenanceWindowExecution'*/
export const nativeSSMCancelMaintenanceWindowExecution = (input: SdkIntegrationTask<CancelMaintenanceWindowExecutionCommandInput>): Promise<CancelMaintenanceWindowExecutionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CancelMaintenanceWindowExecutionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createActivation'*/
export const nativeSSMCreateActivation = (input: SdkIntegrationTask<CreateActivationCommandInput>): Promise<CreateActivationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateActivationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createAssociation'*/
export const nativeSSMCreateAssociation = (input: SdkIntegrationTask<CreateAssociationCommandInput>): Promise<CreateAssociationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateAssociationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createAssociationBatch'*/
export const nativeSSMCreateAssociationBatch = (input: SdkIntegrationTask<CreateAssociationBatchCommandInput>): Promise<CreateAssociationBatchCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateAssociationBatchCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createDocument'*/
export const nativeSSMCreateDocument = (input: SdkIntegrationTask<CreateDocumentCommandInput>): Promise<CreateDocumentCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateDocumentCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createMaintenanceWindow'*/
export const nativeSSMCreateMaintenanceWindow = (input: SdkIntegrationTask<CreateMaintenanceWindowCommandInput>): Promise<CreateMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createOpsItem'*/
export const nativeSSMCreateOpsItem = (input: SdkIntegrationTask<CreateOpsItemCommandInput>): Promise<CreateOpsItemCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateOpsItemCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createOpsMetadata'*/
export const nativeSSMCreateOpsMetadata = (input: SdkIntegrationTask<CreateOpsMetadataCommandInput>): Promise<CreateOpsMetadataCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateOpsMetadataCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createPatchBaseline'*/
export const nativeSSMCreatePatchBaseline = (input: SdkIntegrationTask<CreatePatchBaselineCommandInput>): Promise<CreatePatchBaselineCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreatePatchBaselineCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createResourceDataSync'*/
export const nativeSSMCreateResourceDataSync = (input: SdkIntegrationTask<CreateResourceDataSyncCommandInput>): Promise<CreateResourceDataSyncCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new CreateResourceDataSyncCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteActivation'*/
export const nativeSSMDeleteActivation = (input: SdkIntegrationTask<DeleteActivationCommandInput>): Promise<DeleteActivationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteActivationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteAssociation'*/
export const nativeSSMDeleteAssociation = (input: SdkIntegrationTask<DeleteAssociationCommandInput>): Promise<DeleteAssociationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteAssociationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteDocument'*/
export const nativeSSMDeleteDocument = (input: SdkIntegrationTask<DeleteDocumentCommandInput>): Promise<DeleteDocumentCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteDocumentCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteInventory'*/
export const nativeSSMDeleteInventory = (input: SdkIntegrationTask<DeleteInventoryCommandInput>): Promise<DeleteInventoryCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteInventoryCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteMaintenanceWindow'*/
export const nativeSSMDeleteMaintenanceWindow = (input: SdkIntegrationTask<DeleteMaintenanceWindowCommandInput>): Promise<DeleteMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteOpsMetadata'*/
export const nativeSSMDeleteOpsMetadata = (input: SdkIntegrationTask<DeleteOpsMetadataCommandInput>): Promise<DeleteOpsMetadataCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteOpsMetadataCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteParameter'*/
export const nativeSSMDeleteParameter = (input: SdkIntegrationTask<DeleteParameterCommandInput>): Promise<DeleteParameterCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteParameterCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteParameters'*/
export const nativeSSMDeleteParameters = (input: SdkIntegrationTask<DeleteParametersCommandInput>): Promise<DeleteParametersCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteParametersCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deletePatchBaseline'*/
export const nativeSSMDeletePatchBaseline = (input: SdkIntegrationTask<DeletePatchBaselineCommandInput>): Promise<DeletePatchBaselineCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeletePatchBaselineCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteResourceDataSync'*/
export const nativeSSMDeleteResourceDataSync = (input: SdkIntegrationTask<DeleteResourceDataSyncCommandInput>): Promise<DeleteResourceDataSyncCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeleteResourceDataSyncCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterManagedInstance'*/
export const nativeSSMDeregisterManagedInstance = (input: SdkIntegrationTask<DeregisterManagedInstanceCommandInput>): Promise<DeregisterManagedInstanceCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeregisterManagedInstanceCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterPatchBaselineForPatchGroup'*/
export const nativeSSMDeregisterPatchBaselineForPatchGroup = (input: SdkIntegrationTask<DeregisterPatchBaselineForPatchGroupCommandInput>): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeregisterPatchBaselineForPatchGroupCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterTargetFromMaintenanceWindow'*/
export const nativeSSMDeregisterTargetFromMaintenanceWindow = (input: SdkIntegrationTask<DeregisterTargetFromMaintenanceWindowCommandInput>): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeregisterTargetFromMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterTaskFromMaintenanceWindow'*/
export const nativeSSMDeregisterTaskFromMaintenanceWindow = (input: SdkIntegrationTask<DeregisterTaskFromMaintenanceWindowCommandInput>): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DeregisterTaskFromMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeActivations'*/
export const nativeSSMDescribeActivations = (input: SdkIntegrationTask<DescribeActivationsCommandInput>): Promise<DescribeActivationsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeActivationsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociation'*/
export const nativeSSMDescribeAssociation = (input: SdkIntegrationTask<DescribeAssociationCommandInput>): Promise<DescribeAssociationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeAssociationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociationExecutionTargets'*/
export const nativeSSMDescribeAssociationExecutionTargets = (input: SdkIntegrationTask<DescribeAssociationExecutionTargetsCommandInput>): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeAssociationExecutionTargetsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociationExecutions'*/
export const nativeSSMDescribeAssociationExecutions = (input: SdkIntegrationTask<DescribeAssociationExecutionsCommandInput>): Promise<DescribeAssociationExecutionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeAssociationExecutionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAutomationExecutions'*/
export const nativeSSMDescribeAutomationExecutions = (input: SdkIntegrationTask<DescribeAutomationExecutionsCommandInput>): Promise<DescribeAutomationExecutionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeAutomationExecutionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAutomationStepExecutions'*/
export const nativeSSMDescribeAutomationStepExecutions = (input: SdkIntegrationTask<DescribeAutomationStepExecutionsCommandInput>): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeAutomationStepExecutionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAvailablePatches'*/
export const nativeSSMDescribeAvailablePatches = (input: SdkIntegrationTask<DescribeAvailablePatchesCommandInput>): Promise<DescribeAvailablePatchesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeAvailablePatchesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeDocument'*/
export const nativeSSMDescribeDocument = (input: SdkIntegrationTask<DescribeDocumentCommandInput>): Promise<DescribeDocumentCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeDocumentCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeDocumentPermission'*/
export const nativeSSMDescribeDocumentPermission = (input: SdkIntegrationTask<DescribeDocumentPermissionCommandInput>): Promise<DescribeDocumentPermissionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeDocumentPermissionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeEffectiveInstanceAssociations'*/
export const nativeSSMDescribeEffectiveInstanceAssociations = (input: SdkIntegrationTask<DescribeEffectiveInstanceAssociationsCommandInput>): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeEffectiveInstanceAssociationsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeEffectivePatchesForPatchBaseline'*/
export const nativeSSMDescribeEffectivePatchesForPatchBaseline = (input: SdkIntegrationTask<DescribeEffectivePatchesForPatchBaselineCommandInput>): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeEffectivePatchesForPatchBaselineCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstanceAssociationsStatus'*/
export const nativeSSMDescribeInstanceAssociationsStatus = (input: SdkIntegrationTask<DescribeInstanceAssociationsStatusCommandInput>): Promise<DescribeInstanceAssociationsStatusCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeInstanceAssociationsStatusCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstanceInformation'*/
export const nativeSSMDescribeInstanceInformation = (input: SdkIntegrationTask<DescribeInstanceInformationCommandInput>): Promise<DescribeInstanceInformationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeInstanceInformationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatchStates'*/
export const nativeSSMDescribeInstancePatchStates = (input: SdkIntegrationTask<DescribeInstancePatchStatesCommandInput>): Promise<DescribeInstancePatchStatesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeInstancePatchStatesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatchStatesForPatchGroup'*/
export const nativeSSMDescribeInstancePatchStatesForPatchGroup = (input: SdkIntegrationTask<DescribeInstancePatchStatesForPatchGroupCommandInput>): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeInstancePatchStatesForPatchGroupCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatches'*/
export const nativeSSMDescribeInstancePatches = (input: SdkIntegrationTask<DescribeInstancePatchesCommandInput>): Promise<DescribeInstancePatchesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeInstancePatchesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInventoryDeletions'*/
export const nativeSSMDescribeInventoryDeletions = (input: SdkIntegrationTask<DescribeInventoryDeletionsCommandInput>): Promise<DescribeInventoryDeletionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeInventoryDeletionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutionTaskInvocations'*/
export const nativeSSMDescribeMaintenanceWindowExecutionTaskInvocations = (input: SdkIntegrationTask<DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput>): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutionTasks'*/
export const nativeSSMDescribeMaintenanceWindowExecutionTasks = (input: SdkIntegrationTask<DescribeMaintenanceWindowExecutionTasksCommandInput>): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowExecutionTasksCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutions'*/
export const nativeSSMDescribeMaintenanceWindowExecutions = (input: SdkIntegrationTask<DescribeMaintenanceWindowExecutionsCommandInput>): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowExecutionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowSchedule'*/
export const nativeSSMDescribeMaintenanceWindowSchedule = (input: SdkIntegrationTask<DescribeMaintenanceWindowScheduleCommandInput>): Promise<DescribeMaintenanceWindowScheduleCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowScheduleCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowTargets'*/
export const nativeSSMDescribeMaintenanceWindowTargets = (input: SdkIntegrationTask<DescribeMaintenanceWindowTargetsCommandInput>): Promise<DescribeMaintenanceWindowTargetsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowTargetsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowTasks'*/
export const nativeSSMDescribeMaintenanceWindowTasks = (input: SdkIntegrationTask<DescribeMaintenanceWindowTasksCommandInput>): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowTasksCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindows'*/
export const nativeSSMDescribeMaintenanceWindows = (input: SdkIntegrationTask<DescribeMaintenanceWindowsCommandInput>): Promise<DescribeMaintenanceWindowsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowsForTarget'*/
export const nativeSSMDescribeMaintenanceWindowsForTarget = (input: SdkIntegrationTask<DescribeMaintenanceWindowsForTargetCommandInput>): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeMaintenanceWindowsForTargetCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeOpsItems'*/
export const nativeSSMDescribeOpsItems = (input: SdkIntegrationTask<DescribeOpsItemsCommandInput>): Promise<DescribeOpsItemsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeOpsItemsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeParameters'*/
export const nativeSSMDescribeParameters = (input: SdkIntegrationTask<DescribeParametersCommandInput>): Promise<DescribeParametersCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeParametersCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchBaselines'*/
export const nativeSSMDescribePatchBaselines = (input: SdkIntegrationTask<DescribePatchBaselinesCommandInput>): Promise<DescribePatchBaselinesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribePatchBaselinesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchGroupState'*/
export const nativeSSMDescribePatchGroupState = (input: SdkIntegrationTask<DescribePatchGroupStateCommandInput>): Promise<DescribePatchGroupStateCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribePatchGroupStateCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchGroups'*/
export const nativeSSMDescribePatchGroups = (input: SdkIntegrationTask<DescribePatchGroupsCommandInput>): Promise<DescribePatchGroupsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribePatchGroupsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchProperties'*/
export const nativeSSMDescribePatchProperties = (input: SdkIntegrationTask<DescribePatchPropertiesCommandInput>): Promise<DescribePatchPropertiesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribePatchPropertiesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeSessions'*/
export const nativeSSMDescribeSessions = (input: SdkIntegrationTask<DescribeSessionsCommandInput>): Promise<DescribeSessionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DescribeSessionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:disassociateOpsItemRelatedItem'*/
export const nativeSSMDisassociateOpsItemRelatedItem = (input: SdkIntegrationTask<DisassociateOpsItemRelatedItemCommandInput>): Promise<DisassociateOpsItemRelatedItemCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new DisassociateOpsItemRelatedItemCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getAutomationExecution'*/
export const nativeSSMGetAutomationExecution = (input: SdkIntegrationTask<GetAutomationExecutionCommandInput>): Promise<GetAutomationExecutionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetAutomationExecutionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getCalendarState'*/
export const nativeSSMGetCalendarState = (input: SdkIntegrationTask<GetCalendarStateCommandInput>): Promise<GetCalendarStateCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetCalendarStateCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getCommandInvocation'*/
export const nativeSSMGetCommandInvocation = (input: SdkIntegrationTask<GetCommandInvocationCommandInput>): Promise<GetCommandInvocationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetCommandInvocationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getConnectionStatus'*/
export const nativeSSMGetConnectionStatus = (input: SdkIntegrationTask<GetConnectionStatusCommandInput>): Promise<GetConnectionStatusCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetConnectionStatusCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDefaultPatchBaseline'*/
export const nativeSSMGetDefaultPatchBaseline = (input: SdkIntegrationTask<GetDefaultPatchBaselineCommandInput>): Promise<GetDefaultPatchBaselineCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetDefaultPatchBaselineCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDeployablePatchSnapshotForInstance'*/
export const nativeSSMGetDeployablePatchSnapshotForInstance = (input: SdkIntegrationTask<GetDeployablePatchSnapshotForInstanceCommandInput>): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetDeployablePatchSnapshotForInstanceCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDocument'*/
export const nativeSSMGetDocument = (input: SdkIntegrationTask<GetDocumentCommandInput>): Promise<GetDocumentCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetDocumentCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getInventory'*/
export const nativeSSMGetInventory = (input: SdkIntegrationTask<GetInventoryCommandInput>): Promise<GetInventoryCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetInventoryCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getInventorySchema'*/
export const nativeSSMGetInventorySchema = (input: SdkIntegrationTask<GetInventorySchemaCommandInput>): Promise<GetInventorySchemaCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetInventorySchemaCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindow'*/
export const nativeSSMGetMaintenanceWindow = (input: SdkIntegrationTask<GetMaintenanceWindowCommandInput>): Promise<GetMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecution'*/
export const nativeSSMGetMaintenanceWindowExecution = (input: SdkIntegrationTask<GetMaintenanceWindowExecutionCommandInput>): Promise<GetMaintenanceWindowExecutionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetMaintenanceWindowExecutionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecutionTask'*/
export const nativeSSMGetMaintenanceWindowExecutionTask = (input: SdkIntegrationTask<GetMaintenanceWindowExecutionTaskCommandInput>): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetMaintenanceWindowExecutionTaskCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecutionTaskInvocation'*/
export const nativeSSMGetMaintenanceWindowExecutionTaskInvocation = (input: SdkIntegrationTask<GetMaintenanceWindowExecutionTaskInvocationCommandInput>): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowTask'*/
export const nativeSSMGetMaintenanceWindowTask = (input: SdkIntegrationTask<GetMaintenanceWindowTaskCommandInput>): Promise<GetMaintenanceWindowTaskCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetMaintenanceWindowTaskCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsItem'*/
export const nativeSSMGetOpsItem = (input: SdkIntegrationTask<GetOpsItemCommandInput>): Promise<GetOpsItemCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetOpsItemCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsMetadata'*/
export const nativeSSMGetOpsMetadata = (input: SdkIntegrationTask<GetOpsMetadataCommandInput>): Promise<GetOpsMetadataCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetOpsMetadataCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsSummary'*/
export const nativeSSMGetOpsSummary = (input: SdkIntegrationTask<GetOpsSummaryCommandInput>): Promise<GetOpsSummaryCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetOpsSummaryCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameter'*/
export const nativeSSMGetParameter = (input: SdkIntegrationTask<GetParameterCommandInput>): Promise<GetParameterCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetParameterCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameterHistory'*/
export const nativeSSMGetParameterHistory = (input: SdkIntegrationTask<GetParameterHistoryCommandInput>): Promise<GetParameterHistoryCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetParameterHistoryCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameters'*/
export const nativeSSMGetParameters = (input: SdkIntegrationTask<GetParametersCommandInput>): Promise<GetParametersCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetParametersCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParametersByPath'*/
export const nativeSSMGetParametersByPath = (input: SdkIntegrationTask<GetParametersByPathCommandInput>): Promise<GetParametersByPathCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetParametersByPathCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getPatchBaseline'*/
export const nativeSSMGetPatchBaseline = (input: SdkIntegrationTask<GetPatchBaselineCommandInput>): Promise<GetPatchBaselineCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetPatchBaselineCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getPatchBaselineForPatchGroup'*/
export const nativeSSMGetPatchBaselineForPatchGroup = (input: SdkIntegrationTask<GetPatchBaselineForPatchGroupCommandInput>): Promise<GetPatchBaselineForPatchGroupCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetPatchBaselineForPatchGroupCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getServiceSetting'*/
export const nativeSSMGetServiceSetting = (input: SdkIntegrationTask<GetServiceSettingCommandInput>): Promise<GetServiceSettingCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new GetServiceSettingCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:labelParameterVersion'*/
export const nativeSSMLabelParameterVersion = (input: SdkIntegrationTask<LabelParameterVersionCommandInput>): Promise<LabelParameterVersionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new LabelParameterVersionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listAssociationVersions'*/
export const nativeSSMListAssociationVersions = (input: SdkIntegrationTask<ListAssociationVersionsCommandInput>): Promise<ListAssociationVersionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListAssociationVersionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listAssociations'*/
export const nativeSSMListAssociations = (input: SdkIntegrationTask<ListAssociationsCommandInput>): Promise<ListAssociationsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListAssociationsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listCommandInvocations'*/
export const nativeSSMListCommandInvocations = (input: SdkIntegrationTask<ListCommandInvocationsCommandInput>): Promise<ListCommandInvocationsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListCommandInvocationsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listCommands'*/
export const nativeSSMListCommands = (input: SdkIntegrationTask<ListCommandsCommandInput>): Promise<ListCommandsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListCommandsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listComplianceItems'*/
export const nativeSSMListComplianceItems = (input: SdkIntegrationTask<ListComplianceItemsCommandInput>): Promise<ListComplianceItemsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListComplianceItemsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listComplianceSummaries'*/
export const nativeSSMListComplianceSummaries = (input: SdkIntegrationTask<ListComplianceSummariesCommandInput>): Promise<ListComplianceSummariesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListComplianceSummariesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocumentMetadataHistory'*/
export const nativeSSMListDocumentMetadataHistory = (input: SdkIntegrationTask<ListDocumentMetadataHistoryCommandInput>): Promise<ListDocumentMetadataHistoryCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListDocumentMetadataHistoryCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocumentVersions'*/
export const nativeSSMListDocumentVersions = (input: SdkIntegrationTask<ListDocumentVersionsCommandInput>): Promise<ListDocumentVersionsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListDocumentVersionsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocuments'*/
export const nativeSSMListDocuments = (input: SdkIntegrationTask<ListDocumentsCommandInput>): Promise<ListDocumentsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListDocumentsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listInventoryEntries'*/
export const nativeSSMListInventoryEntries = (input: SdkIntegrationTask<ListInventoryEntriesCommandInput>): Promise<ListInventoryEntriesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListInventoryEntriesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsItemEvents'*/
export const nativeSSMListOpsItemEvents = (input: SdkIntegrationTask<ListOpsItemEventsCommandInput>): Promise<ListOpsItemEventsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListOpsItemEventsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsItemRelatedItems'*/
export const nativeSSMListOpsItemRelatedItems = (input: SdkIntegrationTask<ListOpsItemRelatedItemsCommandInput>): Promise<ListOpsItemRelatedItemsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListOpsItemRelatedItemsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsMetadata'*/
export const nativeSSMListOpsMetadata = (input: SdkIntegrationTask<ListOpsMetadataCommandInput>): Promise<ListOpsMetadataCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListOpsMetadataCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listResourceComplianceSummaries'*/
export const nativeSSMListResourceComplianceSummaries = (input: SdkIntegrationTask<ListResourceComplianceSummariesCommandInput>): Promise<ListResourceComplianceSummariesCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListResourceComplianceSummariesCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listResourceDataSync'*/
export const nativeSSMListResourceDataSync = (input: SdkIntegrationTask<ListResourceDataSyncCommandInput>): Promise<ListResourceDataSyncCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListResourceDataSyncCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listTagsForResource'*/
export const nativeSSMListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ListTagsForResourceCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:modifyDocumentPermission'*/
export const nativeSSMModifyDocumentPermission = (input: SdkIntegrationTask<ModifyDocumentPermissionCommandInput>): Promise<ModifyDocumentPermissionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ModifyDocumentPermissionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putComplianceItems'*/
export const nativeSSMPutComplianceItems = (input: SdkIntegrationTask<PutComplianceItemsCommandInput>): Promise<PutComplianceItemsCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new PutComplianceItemsCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putInventory'*/
export const nativeSSMPutInventory = (input: SdkIntegrationTask<PutInventoryCommandInput>): Promise<PutInventoryCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new PutInventoryCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putParameter'*/
export const nativeSSMPutParameter = (input: SdkIntegrationTask<PutParameterCommandInput>): Promise<PutParameterCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new PutParameterCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerDefaultPatchBaseline'*/
export const nativeSSMRegisterDefaultPatchBaseline = (input: SdkIntegrationTask<RegisterDefaultPatchBaselineCommandInput>): Promise<RegisterDefaultPatchBaselineCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new RegisterDefaultPatchBaselineCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerPatchBaselineForPatchGroup'*/
export const nativeSSMRegisterPatchBaselineForPatchGroup = (input: SdkIntegrationTask<RegisterPatchBaselineForPatchGroupCommandInput>): Promise<RegisterPatchBaselineForPatchGroupCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new RegisterPatchBaselineForPatchGroupCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerTargetWithMaintenanceWindow'*/
export const nativeSSMRegisterTargetWithMaintenanceWindow = (input: SdkIntegrationTask<RegisterTargetWithMaintenanceWindowCommandInput>): Promise<RegisterTargetWithMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new RegisterTargetWithMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerTaskWithMaintenanceWindow'*/
export const nativeSSMRegisterTaskWithMaintenanceWindow = (input: SdkIntegrationTask<RegisterTaskWithMaintenanceWindowCommandInput>): Promise<RegisterTaskWithMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new RegisterTaskWithMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:removeTagsFromResource'*/
export const nativeSSMRemoveTagsFromResource = (input: SdkIntegrationTask<RemoveTagsFromResourceCommandInput>): Promise<RemoveTagsFromResourceCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new RemoveTagsFromResourceCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:resetServiceSetting'*/
export const nativeSSMResetServiceSetting = (input: SdkIntegrationTask<ResetServiceSettingCommandInput>): Promise<ResetServiceSettingCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ResetServiceSettingCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:resumeSession'*/
export const nativeSSMResumeSession = (input: SdkIntegrationTask<ResumeSessionCommandInput>): Promise<ResumeSessionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new ResumeSessionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:sendAutomationSignal'*/
export const nativeSSMSendAutomationSignal = (input: SdkIntegrationTask<SendAutomationSignalCommandInput>): Promise<SendAutomationSignalCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new SendAutomationSignalCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:sendCommand'*/
export const nativeSSMSendCommand = (input: SdkIntegrationTask<SendCommandCommandInput>): Promise<SendCommandCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new SendCommandCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startAssociationsOnce'*/
export const nativeSSMStartAssociationsOnce = (input: SdkIntegrationTask<StartAssociationsOnceCommandInput>): Promise<StartAssociationsOnceCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new StartAssociationsOnceCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startAutomationExecution'*/
export const nativeSSMStartAutomationExecution = (input: SdkIntegrationTask<StartAutomationExecutionCommandInput>): Promise<StartAutomationExecutionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new StartAutomationExecutionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startChangeRequestExecution'*/
export const nativeSSMStartChangeRequestExecution = (input: SdkIntegrationTask<StartChangeRequestExecutionCommandInput>): Promise<StartChangeRequestExecutionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new StartChangeRequestExecutionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startSession'*/
export const nativeSSMStartSession = (input: SdkIntegrationTask<StartSessionCommandInput>): Promise<StartSessionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new StartSessionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:stopAutomationExecution'*/
export const nativeSSMStopAutomationExecution = (input: SdkIntegrationTask<StopAutomationExecutionCommandInput>): Promise<StopAutomationExecutionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new StopAutomationExecutionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:terminateSession'*/
export const nativeSSMTerminateSession = (input: SdkIntegrationTask<TerminateSessionCommandInput>): Promise<TerminateSessionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new TerminateSessionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:unlabelParameterVersion'*/
export const nativeSSMUnlabelParameterVersion = (input: SdkIntegrationTask<UnlabelParameterVersionCommandInput>): Promise<UnlabelParameterVersionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UnlabelParameterVersionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateAssociation'*/
export const nativeSSMUpdateAssociation = (input: SdkIntegrationTask<UpdateAssociationCommandInput>): Promise<UpdateAssociationCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateAssociationCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateAssociationStatus'*/
export const nativeSSMUpdateAssociationStatus = (input: SdkIntegrationTask<UpdateAssociationStatusCommandInput>): Promise<UpdateAssociationStatusCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateAssociationStatusCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocument'*/
export const nativeSSMUpdateDocument = (input: SdkIntegrationTask<UpdateDocumentCommandInput>): Promise<UpdateDocumentCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateDocumentCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocumentDefaultVersion'*/
export const nativeSSMUpdateDocumentDefaultVersion = (input: SdkIntegrationTask<UpdateDocumentDefaultVersionCommandInput>): Promise<UpdateDocumentDefaultVersionCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateDocumentDefaultVersionCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocumentMetadata'*/
export const nativeSSMUpdateDocumentMetadata = (input: SdkIntegrationTask<UpdateDocumentMetadataCommandInput>): Promise<UpdateDocumentMetadataCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateDocumentMetadataCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindow'*/
export const nativeSSMUpdateMaintenanceWindow = (input: SdkIntegrationTask<UpdateMaintenanceWindowCommandInput>): Promise<UpdateMaintenanceWindowCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateMaintenanceWindowCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindowTarget'*/
export const nativeSSMUpdateMaintenanceWindowTarget = (input: SdkIntegrationTask<UpdateMaintenanceWindowTargetCommandInput>): Promise<UpdateMaintenanceWindowTargetCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateMaintenanceWindowTargetCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindowTask'*/
export const nativeSSMUpdateMaintenanceWindowTask = (input: SdkIntegrationTask<UpdateMaintenanceWindowTaskCommandInput>): Promise<UpdateMaintenanceWindowTaskCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateMaintenanceWindowTaskCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateManagedInstanceRole'*/
export const nativeSSMUpdateManagedInstanceRole = (input: SdkIntegrationTask<UpdateManagedInstanceRoleCommandInput>): Promise<UpdateManagedInstanceRoleCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateManagedInstanceRoleCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateOpsItem'*/
export const nativeSSMUpdateOpsItem = (input: SdkIntegrationTask<UpdateOpsItemCommandInput>): Promise<UpdateOpsItemCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateOpsItemCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateOpsMetadata'*/
export const nativeSSMUpdateOpsMetadata = (input: SdkIntegrationTask<UpdateOpsMetadataCommandInput>): Promise<UpdateOpsMetadataCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateOpsMetadataCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updatePatchBaseline'*/
export const nativeSSMUpdatePatchBaseline = (input: SdkIntegrationTask<UpdatePatchBaselineCommandInput>): Promise<UpdatePatchBaselineCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdatePatchBaselineCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateResourceDataSync'*/
export const nativeSSMUpdateResourceDataSync = (input: SdkIntegrationTask<UpdateResourceDataSyncCommandInput>): Promise<UpdateResourceDataSyncCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateResourceDataSyncCommand(input.parameters);
    return ssm.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateServiceSetting'*/
export const nativeSSMUpdateServiceSetting = (input: SdkIntegrationTask<UpdateServiceSettingCommandInput>): Promise<UpdateServiceSettingCommandOutput> => {
    const ssm = new SSMClient({});
    const command = new UpdateServiceSettingCommand(input.parameters);
    return ssm.send(command);
};

