function dropdrop() {

    const grid = document.querySelector('.grid');
    let item = "";

    grid.addEventListener('dragstart', dragstart);
    grid.addEventListener('dragover', dragover);
    grid.addEventListener('drop', drop);

    function dragstart(e) {
        if (e.target.classList.contains("list-drag__item")) {
            item = e.target.dataset.id;
        }
    }

    function dragover(e) {
        e.preventDefault();
    }

    function drop(e) {
        const todo = grid.querySelector(`[data-id="${item}"]`);

        if (e.target.classList.contains("list-drag")) {
            e.target.append(todo);
        }
    }
}

dropdrop();

function addItem() {
    const btn = document.querySelector('.button');
    const grid = document.querySelector('.grid');

    btn.addEventListener('click', () => {
        grid.innerHTML += '<div class="grid__item">\n' +
            '                <div class="grid__header">\n' +
            '                    <div class="grid__header-item">\n' +
            '                        <div class="grid__header-icon">\n' +
            '                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5306 4.46939 20 10 20C15.5306 20 20 15.5306 20 10C20 4.46939 15.5306 0 10 0C4.46939 0 0 4.46939 0 10ZM1.66122 10C1.66122 5.40408 5.40408 1.66122 10 1.66122C14.5959 1.66122 18.3388 5.40408 18.3388 10C18.3388 14.5959 14.5959 18.3388 10 18.3388C5.40408 18.3388 1.66122 14.5959 1.66122 10Z" fill="#5C81C2"/>\n' +
            '                                <path d="M8.04087 13.4041L5.95924 10.298C5.70209 9.91429 5.78781 9.40409 6.17148 9.15103C6.55515 8.89797 7.06536 8.9796 7.31842 9.36327L8.84903 11.6204L12.7552 7.71429C13.0858 7.38368 13.6286 7.37144 13.9592 7.70613C14.298 8.04491 14.2939 8.55511 13.9552 8.89388L9.31842 13.4898C9.18373 13.6572 8.53066 14.0123 8.04087 13.4041Z" fill="#5381C7"/>\n' +
            '                            </svg>\n' +
            '                        </div>\n' +
            '                        <p class="grid__header-name">Новый</p>\n' +
            '                    </div>\n' +
            '                    <div class="grid__header-item">\n' +
            '                        <div class="grid__edit">\n' +
            '                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                                <g opacity="0.5">\n' +
            '                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0254627 13.5583L1.07112 8.64522C1.07112 8.52226 1.13142 8.43124 1.22061 8.34044L8.72698 0.680677C9.30173 0.00937206 10.8616 -0.436206 11.9559 0.680677L13.332 2.08492C14.2226 2.9935 14.2226 4.47093 13.332 5.37971L5.82566 13.0393C5.76516 13.101 5.67617 13.1625 5.55536 13.1918L0.71223 14.3203C0.422028 14.3645 -0.124032 14.1768 0.0254627 13.5583ZM12.4961 4.52669C12.9441 4.06946 12.9441 3.3659 12.4961 2.90867L11.1199 1.50442C10.6834 1.05885 9.97092 1.05885 9.53425 1.50442L2.68566 8.49267H3.46405C3.79162 8.49267 4.06162 8.76849 4.06162 9.10245V10.108H5.04708C5.37465 10.108 5.64455 10.3835 5.64455 10.7178V11.4828L12.4961 4.52669ZM4.45243 12.1862V11.3305H3.46698C2.94981 11.3803 2.8694 10.8467 2.8694 10.7208V9.71222H2.03082L1.34112 12.9163L4.45243 12.1862Z" fill="#3D4044"/>\n' +
            '                                </g>\n' +
            '                            </svg>\n' +
            '                        </div>\n' +
            '                        <div class="grid__delete">\n' +
            '                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                                <path opacity="0.495745" fill-rule="evenodd" clip-rule="evenodd" d="M8.33 12.6923C8.63849 12.6923 8.89212 12.4274 8.89944 12.1136L9.065 4.99648C9.07233 4.67786 8.82342 4.40967 8.50874 4.40225C8.18919 4.39747 7.93312 4.64489 7.92579 4.96335L7.76023 12.0874C7.75274 12.4058 8.00165 12.6923 8.31633 12.6923H8.33ZM5.64509 12.6923H5.65877C5.97344 12.6923 6.22235 12.3859 6.21502 12.0673L6.04947 4.94077C6.04198 4.62214 5.78395 4.36187 5.46635 4.36896C5.15184 4.37637 4.90277 4.63632 4.91026 4.95494L5.07581 12.0966C5.08314 12.4104 5.3366 12.6923 5.64509 12.6923V12.6923ZM5.37209 1.97802H8.62791V1.15385H5.37209V1.97802ZM14 2.63736C14 3.00148 13.7084 3.2967 13.3488 3.2967H0.651163C0.291558 3.2967 0 3.00148 0 2.63736C0 2.27324 0.291558 1.97802 0.651163 1.97802H4.23256V0.494505C4.23256 0.175879 4.4424 0 4.75707 0H9.24277C9.55744 0 9.76744 0.175879 9.76744 0.494505V1.97802H13.3488C13.7084 1.97802 14 2.27324 14 2.63736V2.63736ZM12.2739 4.84418L11.7769 14.3754C11.7587 14.7255 11.473 15 11.1267 15H2.87326C2.527 15 2.2413 14.7255 2.22307 14.3754L1.72623 4.84418C1.70719 4.48055 1.98295 4.17016 2.34207 4.15104C2.70298 4.13341 3.00788 4.41115 3.02677 4.77462L3.49105 13.6813H10.509L10.9732 4.77462C10.9923 4.41099 11.3009 4.13456 11.6579 4.15104C12.017 4.17016 12.2928 4.48055 12.2739 4.84418V4.84418Z" fill="#3D4044"/>\n' +
            '                            </svg>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <ul class="list-drag"></ul>\n' +
            '            </div>';
    });
}

addItem();

function deleteItem() {
    setInterval(() => {
        const list = document.querySelectorAll('.grid__item');

        list.forEach(listitem => {
            const del = listitem.querySelector('.grid__delete');

            del.addEventListener('click', () => {
                listitem.remove();
            })
        }, 1000);
    })
}

deleteItem();