class PermissionLabel {
    constructor() {
        this.error_message = {
            field_permission_denied: (replace) => {
                return (replace !== undefined) ? `You have no permission on this field, need ${replace} permission` : "You have no permission on this field"
            },
            object_permission_denied: (replace) => {
                return (replace !== undefined) ? `You have no permission on the object ${replace}` : "You have no permission on the object"
            },
            mutation_permission_denied: (replace) => {
                return (replace !== undefined) ? `You have no permission on the mutation ${replace}` : "You have no permission on the mutation"
            }
        }
    }
}

module.exports = new PermissionLabel();