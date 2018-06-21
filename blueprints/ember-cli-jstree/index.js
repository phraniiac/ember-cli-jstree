module.exports = {
    normalizeEntityName: function() {},

    afterInstall: function() {
        return this.addBowerPackagesToProject([
          { 
            name : 'jstree',
            source: 'https://github.com/phraniiac/jstree.git' 
          }
        ]);
    }
};
