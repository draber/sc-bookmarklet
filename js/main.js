(function() {
            const _get = ((str) => {
                return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
            })();

            const userSelect = document.querySelector('#user');
            let users = ['Admin/Test-taker'];
            if(_get.u){
                users.unshift(_get.u);
            }

            users.forEach((user) => {
                let option = document.createElement('option');
                option.value = user;
                option.text = user;
                userSelect.add(option, null);
            });

            const versionSelect = document.querySelector('#version');
            let versions = [];
            if(_get.vm) {
                versions.push(_get.vm);
            }
            if(_get.vf) {
                versions.push(_get.vf);
            }
            versions.forEach((version) => {
                let option = document.createElement('option');
                option.value = version;
                option.text = version;
                versionSelect.add(option, null);
            });

            document.querySelector('#config-form').addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.opener.postMessage({
                    version: versionSelect.value,
                    user: userSelect.value,
                    color: document.querySelector('#color').value
                }, '*');
            });
        }());
