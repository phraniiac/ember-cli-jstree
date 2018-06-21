module.exports = {
    normalizeEntityName: function() {},

    afterInstall: function() {
        return this.addBowerPackagesToProject([
          { 
            name : 'jstree',
            source: 'git@github.com:phraniiac/jstree.git' 
          }
        ]);
    }
};
