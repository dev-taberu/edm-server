module.exports = class BaseService {
    constructor(dao) {
        this.dao = dao;
        this.dao.open();
    }

    create(model) {
        return this.dao.create(model);
    }

    get(id) {
        return this.dao.getById(id);
    }

    update(id, newData) {
        return this.dao.getById(id).then(e => e.updateOne(newData));
    }

    delete(id) {
        return this.dao.getById(id).then(e => e.remove());
    }

    find(condition) {
        return this.dao.findOne(condition);
    }

    findAll(condition) {
        return this.dao.findAll(condition);
    }

    getAll() {
        return this.dao.getAll();
    }
}