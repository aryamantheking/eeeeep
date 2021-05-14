canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car1_width = 120;
car1_height = 75;
car1_image = "https://cdn3.vectorstock.com/i/1000x1000/08/87/cartoon-car-vector-720887.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUUEhMRFRUWFRIVFhIRFhUWFxkYFxUXFhUWFRcYHighGBonGxUVJjEiJSkrLi4uFx8zODMsNygtOisBCgoKDg0OGxAQGy8lHyYvLS83Li8yLy4vLS0yLS0tLS0tLS0tLystLi0tLS0rLzUtLy0rMistLS0tLS0uLSstLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABLEAABAgMEBAkIBQkIAwAAAAABAAIDBBEFEiExBkFRYQcTFCIyUnGBkRVCYnKSobHRFmOCstIjM0NTk6KzwcIXNHOj0+Hi8CSk8f/EABsBAQACAwEBAAAAAAAAAAAAAAAFBgEDBAIH/8QAQBEAAQIDAgoGCQIFBQAAAAAAAQACAwQRBTESIUFRYXGBobHRBhRTkZLBExUiM1Jy0uHwMqIjQmKCshZDwuLx/9oADAMBAAIRAxEAPwDuKIiIiIiIiIiIiIiIiIiIiKs21phLS9QHcY8aoZF0H0nau6pVFtTTGbmCQ13Ft2QrzT3nM+NNykZay5iPjpQZz5C/gNKlpSxZqYx0wRnOXUL/AC0rp0/bMCB+ciMaerWrvZGKrU9wiQG4QmPfvcQ0e4k/BUSQsiPMYgEjrOJDd/OIx+zVWay9CCRV5d9gCne54x8Au3qkhA944vOi7jT9y3xRY0k7AjRDFeP5W4+8NNAdbgVrzPCBNvHMbDZvDanxcSPcox2k87GNBGiVypDLhjWmAYMcVv6X2TDleLaxtD+Uq6tThcpie0qCsB9IrT9bT/PouyCYBhGJDhtFA8ior+kDLt+6kZaZlnyT5mDADaNikBwBNWZzpN9DqKlmxrSd+kmh6xjD71F8vkJ6J0jGPrRPm5dQkJdjmAloJxxPaVtcmZ1R4KOdazwcTWimYDmVAN6QWg9oc1sJuprvNy426wZkY3HV2gtr8V6NhzsLoujjewRfi1dg4hvVb4BfLpOGfNHdh8FkWzEygHWPuFsHSC0h+oQna2u8neS5GzSCfgnGLFrsiFzj4PqpaW4QJmHhFhscNt1wPiMPcr9GsmE4UIw2HEeBUNOaGwHjmsYNdWAsPfdwPeFnr8tExRYQ1jF+eIL2LchvxTMm0jOwivcQ0/uXnZ+nsrEpfvwz6WLfEY+5WWUmmRRWG9j27WEHxpkud2noO9tSwk+vSntMH9Kr0SUmZR15pewjJzS6nttw7kMlJRvdPLTmdd3/APYnQtsOFZU6cGXimG/4H4tgrf8A2ucu3IuZ2Pp/FhkMmW3h1m4O9+B1/NXmy7ZgzIrCeCdbDQOHa3PXnkuCZkI8v+tuLOLvttAXHOWZMyvvG4s4xj7bQFJoiLjXAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqNpTpuyFWHLkOfkYmbR6tDid+Xat8vLRI7sGGOQ1rplZSLNPwIQrwGs/hzVVjtq3YMo2sR2JyY2hce7UMMyua2/phHmqtb+ThnzGkgkY9I5nPLLDJQMeM+M4uc4uJNSXGue9WjR3RN0SjogIGBDcnHI8+o5g3Z9isDJWWkGh8T2n5PsMms8cSsboUjY0MRY5wnm4UqSf6R/yN2cXKDs6x4kweaCaZl1Wj2qZ01BXmxdDWNAMQB/rtF3V0W68tdVZJCQhwgAGjDIAUA7At7jFGzdoRY9RcM2Tbn4aFWp+1pqfJEV2Az4Gm/wCZ17tWJuheUCRYzIVO35DJba8OMTjFGmpvXCzAYKNFBoXPeEp/5aGNxP3FULFN6LD/AMZp/wDZVp4RXVjt3Xff/wDFUbHfQsOx5P8AnFWSUbSUGlkTi0K4WUytl0+Jkx/nRdxsz82O0/Fbaj7OfRneVs8Yq69pwiqXLxB6JuoL3ReHGJxi8YJW7DC90XhxizxiYJT0gXutOYkIbwagCv8A3EZFevGJxiyARcvDyx4wXCo0qm2xoQxwJhc3c0AN726s/N8FSZuz48m8Fpc0gihaXEfZcMK4dq7Rxi05+Rhx2kPaDXO8AQe0a1IytoxYPsnG3MfzFsxaCpCRtiakqNYcOH8DjXF/S41I1GrdCp2junhwZNA6qRBmPWGvtz3FX2VmGRWh8Nwc05OaagrmekeiLodXwgXDMtGJHqUHOGWBx7VD2Lb0eSfzXEtJxY7ontB14ZjFdb5GBNtMSW9l2VuT7axiyYlNCUk7ThmLJHBeL2HFQ6Rk0EeyclMa7YihbBt+DONqw0cOlDdS8N42jHP4KaUG+G6G4teKEKBiwnwnlkQUIyIiIvC1oiIiIiIiIiIiIiIiIiIiIiIiItWdnIcFhfEcGtGbj8N53LVtm2YUoy9EOPmtHSJ3DZhmuT6QaQxpx1XEtaCbrG9EfM7/AIKQkbOfMmpxNz+Q/KDcpWzbKiTZwjiZnz6B5m4a8SldKtMYkesOFVkKpHpO9YjVu+KqsKGXHXWoyxzXwtmzp3iXh4oS2tAQHAHDHHIj+atIhCXhYMBuzOc5O/cFc/Q9Vly2WYCRcK0qc5PHLTEFdNGtGwwB8UAPGIYcQzfXW6vgrhDcGigouafS2Pth+wPmg0wj7Wfsz+JQkSQm4ri54qTpbz7syokewLYjxTGihrnHLhDuAuAGQBdO40bU41cyGl8f6r2HfjX0NMY/1X7N341r9VzHw7281q/05avZjxN5rpfGpxq5p9Mo31X7N/8AqLH0xj/U/s3/AOqs+q5j4d7eax/p21ezHjbzWzp2+s0B6EI/vxfkqrZJwZ9v77lu2jaj5iI1z7taMbzWloo1zjrceuVFyZoxp3RB++5SkCC9jGQnChwIm9zaXK4WZKRIErCgRBR2BFqKg43Pabxiyrt0m/m969r65uzTKIOp7D/xr7Gmb9g9k/iUUbMmSa4G9v1KkQ+j1rNaB6G7+uH9a6LfS+ud/TR3VHg78S+fpq/qN9/zWPVkx8G9v1L36gtbsf3w/qXRuMS+udjTZ/Ub7RWRpq79W32j8lj1dMfAd3NeTYVqj/Z/cz6l0O+nGLnw01P6se3/AMV9fTc/qv3z+FY9Xx/gKx6ktTsD3s+pdAvpxioH03+qH7b/AILP02+rH7b/AILHUI/wnuXn1NanYHvbzV8c4HNVXSTRpsUF8IAPOJBwD9gJ1O3+O0aH00+q/wAwfgXoNMh1P3x8l6hyszDcHNa4EaD+flF7hWZa8GIIsKC4OFxFO446EHKDiKqEN8WViVaXMc072moOvYfium6K6XQ5poZEc1kUbcA/e2uRrq8N1It+1IMw281l2IAKEuBvADAOw34Kv1ocCpZ0uJ6FSM0tcMtOFbxoN283ZkubTlh1qGYcQaN7c7TmOMbz+g0XCZS2piFgyLEA2Nc4DwrRSkvpvOs/SBw9INcfGlfeo19hRR+lwOuo58VFxOjccfoe066jyPFdiRcwg8I8cdKHCPYHA/eopaU4RYLvzkKI3e1wd7jdouR9kzTceDXUR/7uXHEsOdZcyuojhWu5XlFDWdpFLR6XIrKnzXkNPZQ59ymVwPY5hwXgg6cSi4kJ8J2DEaQcxFEREXleERERERFp2lPw5dhfENGjxJ1ADWVkAuNBestaXENAqStmI8AVJAAxJ1Kp27pxAgVbC/KvxxH5sHHMjpasvFUzSbSyLNktaSyHU0a00rvcdZ9wVdJVik7FbTCj3/CLtp5d5VskOjzQA+ZNT8Iu2nlTWtq07SiTDy+I4knbqGoAahuWpVFlT7WhooLlZ2tDRQYgsLKwsrKysLKwiLKLKwiIiIiIvSD0h2heEv0G/b++5e0HpDtC8ZfoN+399y0u9+z5X8Ya0P8Afs+V/GGvRYRFuW9ZWEREWVhERERERERERERERERERFlYRERZWEREX015GRorPo5pnFly1sQmJD9I1cPVJy7Dh2KrLK1xoLIzcCIKj8uzLTMS8OYZgRRUfl2bYu6WTakKah34TqjIg0DmmmThqKkFwiyLWiyzr0J900odYOuhGtXrRvhEgxojZeaAgxjQNd+iiE5XD5hOx3ZUlVibseLCq+F7TR3jZlGkbVRbVswybsJuNhy5jmPkbjrV9REUOoleUWIGAucQAASScgBiSVx/S/SF03EIaSIbSQ1v9R3n3ZK48I1r8VBEJpo6JiadQV+J+BXL6qy2NJgN9O683as+27vVu6PSADOsvvOIaBcTt4a0RGtrgFWba0pEMlkCjnDAxM2j1QRzu3LtUxMTMOXbhxDQcdSn5qbhSrMOKaDedAGVWVwoKnAbcgtOJa0u3pRoY7CXfdXOosWLMPAcXxXk0AxcewAfyVks7g1tKOL3EiGNXHODSe7E+Kgolun+RnefIc1WovSV1f4cPvPkOanWW5LHKOzvD2/ELegva8VYWuAzLDUe5Vub4LLShtJEOG+mqG8E91aKrzErHlIlHtiQYg2gtPduXlluvr7bBsNONViF0lfX+JDB1GnGvFdPWFVLE0rqQyY7BGH9YA96tZBBoc1Oy01DmG4UM8xrVklJyFNMw4R1jKNf5Q5EREXQupEREWV9wekO0Lwl+i37f8Ry94PSHaF4wOiO2J/EctLvfN+V3Fi0O9835X8Ya9FhEW5b0RERERERERERERERERERERFlERGgnIErTtK0GS7L0T7LBm44ZbM1Q7WtyNMHnENZ+rblqz6xw1rgnLRhS2I43Zh55uOhRc/a0GTxOxuzDzOTjoV4mrblodA+MyvohzveytFp/SuV6z/YKqFlWBNTRpAgRYm9reb7Rw96nv7M7Uu15P8AZvsr8VCOtyOT7LWgbT5jgq6/pHMk+y1oG076jgp6XtmWiVuRoZ9YOZ98Cq33NIzFFzW1tH5qVNI8CLD3ubzfaGHvSyrZjS55jqt/VuALe7Z3Lpl7cqaRm7RyPNdct0kqaR2U0t+k1O+uhdKWpaUkI7LvnDFjuqfkviybTZMsvMwIwcw5t2Y6xvW8rBCihwD2HUVYyIM1BoaOY4bCPzaDpVp4JtOXvcJGbceMAIhPecTT9E46zTI66U2V62vzvKyJdNy8VmD2RoNaecOMbQ9o/wC5L9EKtW9LwmRWxIeLCGMZiOa+dzklEk4xhOxi8HOOYuPKi45p5O8bNvxwYeLA9XA++qry2bVj8ZGe/rPc7xJK1bwGJyGfcrDAYIcNrcwC+iy8MQoTWZgB3BVrTC1zDbxLDznjnkea3Agdp+FNqqtkWZEmozIMJtXONNwGtx2AL4n5oxoj4hzca02DIDuFAum8D9mNZDfMuHOe4sYdjG0vU7XfdVMnZozEUvyZNX3vXz60ZwzccvriuGr73nkArLoTZ9myTjAhRYMSaFeMJIL6jpNbspsGVMVt8JVpRoMhFdALg6rGlzc2tcaOcNnbvVF+gczDn2xYb2cVxwi8YXUc0XrxaW6zmF058cY1y3rkXCqfwMzMwZeMYrnuh8Y3ii8k40PGXSdVbvfVWvSWUlJmHxc1xVHYNLy1rgdrCca9i+TOgYNGA7h3LmOlei85OTj4lWOhuIuuc7BjaDm3c8MckRVjTHRl9nxrhq6G6phxOsNh9IKR0Otg/mIh/wAMnvJb8lfdLLFbFs3iql74EJpY89ImG3HvIB8VxWG8tIc00INQdhGRXRKzLpeIIjdozjKF1yU4+UjCK3aM4yjlpXWlheUnMiLDZEA6ba02HIjxXqr00hwqF9Ja4OAcLiiIUWVlfcLMdq8oeX2ov8V69YWY7V5ty+1E/iOWt3vG6ncWrU73rdTuLFlERbFuRERERERERERERERERERERYc4AFzjRoxJ2AYkr6UFphM3JYtGb3BvcCHn3gBaZiL6KE6JmBPLeueajCBBdFOQE8htKp9sWk6Zil5rTJreq3UO1XLQfRGXuMm7RiQ4cJx/JQ4rmsETXUlxFRu1qqaKWXyuahQjW6XVfTqtxdjqqBTvXTuEfRqLOMgulwCYIc3iqgVa6mLa4V5uSoj3ue4ucakr5pEiOiPL3mpOMro0qWMY1sMNayguhlA2mqlNS47LaTT0W2Q1sSJTlDoZgVNwQ2uIdVuXRBNVdtB5SNLScOFH6Yvc2tbrS4lra7lKkwmPLwxgiOABeGi+QMgXZkLyvCl5gsiNLXhrmnNrgCKb6rj3CHoIyE10zJj8mMYkJuIbtcymraNSsfCCJqYlgyWvdMX2tcA5zaZA4YVzC1eDWwo0rDjcfgIt0CBWtAK1c6mFTWmGxEXKbLtB0vED29jm9ZpzC6bCih7Q5vRcLwO4rnul1lCUm4sIDmg3meq7EeFadysmhMzflyw5w3U7GvJI999TtiTBDzBNxxjWL+8cFZejs0REdLm4gkaxf3ip2K22JCLo8JozL2AdpIC7wuS8HUhxsyHkYQwXnZWoA95r9ldaXm3IgMVrBkHH7cV56SRQ6OyGMg4nkAuM6S6NRZZ7qMeYdSWuaCRSvNBIyPaqjpFEMKWjOoeiG+24N/mv0ooec0dk4wPGy0u8HMOhtIOupFKE71lttO9EWPb7VCKjVeRvxdyy3pC4wHQ3t9rBIDgctKVI34u5fjRdXsC3ocjZUCI4OdUxGhooCXGJEOeoYHFc90ns0ys3MQCKcXGiMA9EON09hbQ96uvB8+DNyr5WO1rwx14NNRzXawRiCHXsR1goNVtWLRXS1s8XtEN0N7AHUJvAtJpUHDXqU8XEqOsqyJeUDuIhhl7FziXOJptc4mg3L0kbTgxy4QosN5b0gxwNP9t6ItxROkdvMkYQiPY55c661rSBjQkkk5DBSMzMMhNL4j2sY2lXvNAKmgx7VqTkpLzsGjrsWG6jmuYdYyLXDIoi1LC0jhT0KIWBzS0EPY6hIBBoQRmMD4LiK63aspL2VJxjBBD4guBzjVxc4ENodwLj3FckRF0LQx96VAPmve0eN7+oqcUDoSz/AMWu2I74AKfV4kK9Wh/KOC+kWZXqcL5RwWCsr4uek5LnpOXWuvCObgvSHmF8tGfrP++V83PSclzeV4Iq4HXvpyXghxeHUurvpyX2i+LnpOS56Tl7XvCObeF9ovi56Tkuek5MaYTs28L7RfFz0nJc9JyY0wnZt4X2i+LnpOS56TkxphOzbwvtKL4ub3LHF73ImE7NvXpRYXxxe9y+6IstJN4RVHT84wR/inxDB/JW+6VT+EBlDBO6IPC581HWvXqj9n+QUVbtRIv/ALf8gvXgqpyxx1iC+ntMqrX/AGiy3G3LsS5W7x2F3OlaVrd3qgaE2iJechucaNcTDcTsdgDu5109y6SNDJHjeM4o1vXrl88XWtejsrqrRU1UBWMxCviq8I85DY4B8RjXOPNa5wBPYDmvdEWPhtVZs/TmVjRRDbxrbxuse8ANca0GRq2u9WJswwucwPYXN6TA4Fw9YalXYeg0q2OIw4wUcHiFeFwOBqNVaVxpX3IiqPCr/fGHWYDK+3EHyXloA7nxm7WsPgXfiWhp1aIjzkQtILWUhtI2Nz/evKzcE2jsWYe+M0M4oFsNznOIdqc66A01w3jMLskIrYUwx7zQDkV32XGZBm2RHmgFa9xC7pwf2bxMsHEUdFN/7IFGg+8/aVpWjJkABrcAAABsAFAt0LRHjOjRHRHXk/nJc8zHdMRXRXXk1+2y5ZXnGdQL0WvOHmlaloX574dbCpMCchjCIGsi01PaKMce1oA7W71zixbUiSkZsWHmMwcnNObTuK/QOlUJsUPhvF5rgQQdi4XpJo9ElHnN0InmxP5O2H4oi6NMTzbUkojZV4D3NALHGjhiCWu3EVFcitbQbRaJJl8SMWh7mhjWMN6ja1JcRhWoGC5ZKzT4Tg+G5zHDJzSQVaJPhDnGCjuKib3tIP7hA9yIr3ptZUSalSyFi9r2vDa0vUBBFThXnVx2LQ0Ql3WfKPdNkQxfL7riDdFAKYayRkFWJjhHmnVDWQGb7rnEeLqe5Vm07VjTLr0aI551VyHY0YDuRFKaX6RunouFWwmVENh97nbz7vFNDLKExHDntrCh85wORPmtO2pz3AqNsqzIky+6wYec49Fo3n+S6PZkkyXhiGzIYk63HWSiKZgw4TBdYxjQK0a1tBjicAvu9D6rfBR18pfK3CZjNFA9wHzHyK6Gzcw0ANiOH9zhwKkbzNjfAfNLzOq3w/3UdfKXyvXW5jtHeJ3NeuvTXav8Tuakb0Pqt8EvQ+q3wUdfKXynW5jtHeJ3NY67M9q/xO5qRvQ+q3wS9D6rfBR18pfKx1qP2jvEeaddme1f4nc1I3ofVb4LN5nVb4KNvlL5TrUftHeI8067M9q/xO5qRqzqjwWbzOqPBRt8pfKdaj9o7xHmnXJntX+J3NSN5nVHgs3m9UeCjb5S+U61H7R3iKdcme0f4nc1JXm9UeCXm9UeCjb5S+U61H7R3iKdcme0f4nc1JXm9UeCxfb1R4KOvlL5TrUftHeI81jrkz2rvE7mpMRWdVvgonSmzmTUBzQ1nGAVhuAFaihLa76U8F93yl8rw6LEcKOcTrJ5rw+PFeKOeSNJJ81yBzaYHA7Cup6D6WtjtbAjupGaAGuOUQDLHr7tar2lej5eTGgipzewa/SaNu0Kl5LWtS6Ba2iE5Mzz3PoIbn1EYuFGw681rRneAwpTNdIBoVx2ytOJuAA0ubFaNUUEmmwOBB8aqZ/tNfT+7Mr65+FERZsPR6bhWjfLXBgiRHOi+a5rq69ZNRh8lLacaWtl2ugwXAxnCjnDKGDnj192rPYqha2nM3HBaHNhNNcIQINNhcST4UVaxJ1knxRFmGwuIAFSSAANZOQXedCYQkpaHB87FzyNb3Yu8MB2ALnuiOjxhkRowo7zGHzfSdv2DV8LvLxCiLpNkT16issM4Ln+jkQ1CvsHohEXsvGZbUL2Xy4VRFRLbkqkqrzlmBwIc0EHAgioPaF02dk7yh5izNyIuL2twfw3kmC4wj1SLze7WPeq7H0DnG5CG71XU+8Au9xbK3LwdZW5EXCIWg04c2sb6zx/TVTVncH4FDHiXvQhig9o4kdwXW/JW5Y8lbkRU2WstsJoaxoa0agP+1K9uSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFOSFWzyVuTyVuRFU+SFQtr6IQpirqGG/rsGfrN1+4ro3krcnkrciLiE5oJNMrcuRBqobp7w6gHitH6Iz36h3tM+N5d98lbk8lbkRcRk9A5p9L9yGNdTed3BuB8Va7H0ShS1HUL39d+r1Rq+O9dE8lbl9NsrciKrMkit+WkDsVihWVuUhLWZuRFr2DJ0IVygjBR8lK3VJgIiyiIiLzeyq8Hy4W2sURFHOlAvMyQUoWrFxEUVyIJyJStxLiIorkSciUrcS4iKK5EnIlK3EuIiiuRJyJStxLiIorkSciUrcS4iKK5EnIlK3EuIiiuRJyJStxLiIorkSciUrcS4iKK5EnIlK3EuIiiuRJyJStxLiIorkSciUrcS4iKK5EnIlK3EuIiiuRJyJStxLiIorkSciUrcS4iKK5EF9CTCk7iXERaDJQLYZAWwGrNERfLWUX2iIi/9k=";
car2_x = 10;
car2_y = 80;

background_image = "https://images.cdn.circlesix.co/image/2/900/600/5/uploads/articles/686963181-3236197112014-555efc3536b98.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_key_down);

function my_key_down(e) {
    keyPressed = e.keyCode; console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '87') {
        car2_up();
        console.log("Car2: W alphabet key")
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("Car2: S alphabet key")
    }

    if (keyPressed == '65') {
        car2_right();
        console.log("Car2: A alphabet key")
    }
    if (keyPressed == '68') {
        car2_left();
        console.log("Car2: D alphabet key")
    }

    if (car1_x > 700) {
        console.log("Car 1 (Green) has won the race! Congrats!");
        document.getElementById("game_status").innerHTML = "Car 1 has won the race! Congrats!";
        document.getElementById("game_status").style.color = "yellow";
    }
    if (car2_x > 700) {
        console.log("Car 2 (Pink) has won the race! Congrats!");
        document.getElementById("game_status").innerHTML = "Car 2 has won the race! Congrats!";
        document.getElementById("game_status").style.color = "yellow";
    }
}

function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "visible";
    }
}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "visible";
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function car2_down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function car2_right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = " visible";
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "visible";
    }
}
function reset() {
    window.location.reload();
}
