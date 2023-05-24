package com.kirilanastasoff.TheMovieDB.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kirilanastasoff.TheMovieDB.backend.model.ERole;
import com.kirilanastasoff.TheMovieDB.backend.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

	Optional<Role> findByName(ERole name);

}
