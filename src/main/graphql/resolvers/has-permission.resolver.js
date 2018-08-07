const labels = require('../../../labels/permission.label');
exports.resolveWithFieldPermission = (object, field, permission_type, resolve) => {
    return (source, args, context, info) => {
        const permission = context().permissions;
        return Promise.resolve(resolve(source, args, context, info)).then((result) => {
            if (permission.objects === undefined || permission.objects[object] === undefined || permission.objects[object].fields[field] === undefined || permission.objects[object].fields[field][permission_type] === undefined) {
                return labels.error_message.field_permission_denied(permission_type);
            } else {
                return (!permission.objects[object].fields[field][permission_type]) ? "No permission" : result[field];
            }
        });
    };
};

exports.resolveWithObjectPermission = (object, permission_type, after_function, resolve) => {
    return (source, args, context, info) => {
        const permission = context().permissions;
        return Promise.resolve(resolve(source, args, context, info)).then((result) => {
            if (permission === undefined || permission.objects === undefined || permission.objects[object] === undefined || permission.objects[object][permission_type] === undefined || !permission.objects[object][permission_type]) {
                throw new Error(labels.error_message.object_permission_denied(object));
            } else {
                return after_function;
            }

        });
    };
};