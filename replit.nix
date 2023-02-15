{ pkgs }: {
  deps = [
    pkgs.imagemagick6_light
    pkgs.unzip
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}