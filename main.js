function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('.', false, /\.md$/));
requireAll(require.context('./src', true, /\.md$/));
