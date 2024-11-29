FROM archlinux
WORKDIR /frontend
RUN pacman-db-upgrade
RUN pacman -Syyu --noconfirm
RUN pacman -S base-devel deno --noconfirm
COPY frontend .
RUN deno install
RUN deno task build
CMD ["deno", "task", "preview"]
EXPOSE 4000